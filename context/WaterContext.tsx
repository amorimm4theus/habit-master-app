import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface WaterContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  dailyGoal: number;
  setDailyGoal: (goal: number) => void;
  consumedToday: number;
  addConsumption: (amount: number) => void;
  points: number;
  addPoints: (amount: number) => void;
  lastNotificationTime: Date | null;
  setLastNotificationTime: (date: Date | null) => void;
  ranking: RankingItem[];
  updateUserRanking: (newPoints: number) => void;
}

interface RankingItem {
  id: string;
  name: string;
  points: number;
  isUser?: boolean;
}

const WaterContext = createContext<WaterContextProps | null>(null);

export function WaterProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [consumedToday, setConsumedToday] = useState(0);
  const [points, setPoints] = useState(0);
  const [lastNotificationTime, setLastNotificationTime] = useState<Date | null>(null);
  const [ranking, setRanking] = useState<RankingItem[]>([
    { id: '1', name: 'João', points: 150 },
    { id: '2', name: 'Maria', points: 120 },
    { id: 'user', name: 'Você', points: 80, isUser: true }
  ]);

  // Carregar dados salvos ao iniciar
  useEffect(() => {
    const loadData = async () => {
      const storedLogin = await AsyncStorage.getItem('isLoggedIn');
      const storedPoints = await AsyncStorage.getItem('points');
      const storedConsumed = await AsyncStorage.getItem('consumedToday');

      if (storedLogin === 'true') setIsLoggedInState(true);
      if (storedPoints) setPoints(parseInt(storedPoints));
      if (storedConsumed) setConsumedToday(parseInt(storedConsumed));
    };
    loadData();
  }, []);

  // Salvar dados no AsyncStorage sempre que mudarem
  useEffect(() => {
    AsyncStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    AsyncStorage.setItem('points', points.toString());
  }, [points]);

  useEffect(() => {
    AsyncStorage.setItem('consumedToday', consumedToday.toString());
  }, [consumedToday]);

  const setIsLoggedIn = (loggedIn: boolean) => {
    setIsLoggedInState(loggedIn);
  };

  const addConsumption = (amount: number) => {
    setConsumedToday(prev => {
      const newValue = prev + amount;
      if (newValue % 250 === 0) {
        addPoints(5);
      }
      return newValue;
    });
  };

  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
    updateUserRanking(amount);
  };

  const updateUserRanking = (newPoints: number) => {
    setRanking(prev =>
      prev
        .map(item =>
          item.isUser ? { ...item, points: item.points + newPoints } : item
        )
        .sort((a, b) => b.points - a.points)
    );
  };

  return (
    <WaterContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        dailyGoal,
        setDailyGoal,
        consumedToday,
        addConsumption,
        points,
        addPoints,
        lastNotificationTime,
        setLastNotificationTime,
        ranking,
        updateUserRanking
      }}
    >
      {children}
    </WaterContext.Provider>
  );
}

export function useWater() {
  const context = useContext(WaterContext);
  if (!context) {
    throw new Error('useWater must be used within a WaterProvider');
  }
  return context;
}
