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
  const [lastConsumedDate, setLastConsumedDate] = useState<string | null>(null);
  const [ranking, setRanking] = useState<RankingItem[]>([
    { id: '1', name: 'João Silva', points: 250 },
    { id: '2', name: 'Maria Oliveira', points: 180 },
    { id: '3', name: 'Pedro Santos', points: 300 },
    { id: '4', name: 'Ana Souza', points: 120 },
    { id: '5', name: 'Lucas Lima', points: 90 },
    { id: '6', name: 'Beatriz Costa', points: 210 },
    { id: '7', name: 'Gabriel Almeida', points: 75 },
    { id: '8', name: 'Juliana Rocha', points: 60 },
    { id: '9', name: 'Rafael Martins', points: 200 },
    { id: '10', name: 'Fernanda Ribeiro', points: 170 },
    { id: '11', name: 'Bruno Fernandes', points: 140 },
    { id: '12', name: 'Camila Carvalho', points: 30 },
    { id: '13', name: 'Felipe Araújo', points: 110 },
    { id: '14', name: 'Larissa Melo', points: 260 },
    { id: '15', name: 'Thiago Barros', points: 80 },
    { id: '16', name: 'Patrícia Duarte', points: 50 },
    { id: '17', name: 'Vinícius Teixeira', points: 220 },
    { id: '18', name: 'Amanda Pires', points: 190 },
    { id: '19', name: 'Eduardo Nunes', points: 15 },
    { id: '20', name: 'Carolina Freitas', points: 100 },
    { id: 'user', name: 'Você', points: 205, isUser: true }
  ]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedLogin = await AsyncStorage.getItem('isLoggedIn');
        const storedPoints = await AsyncStorage.getItem('points');
        const storedConsumed = await AsyncStorage.getItem('consumedToday');
        const storedDate = await AsyncStorage.getItem('lastConsumedDate');

        if (storedLogin === 'true') setIsLoggedInState(true);
        if (storedPoints) setPoints(parseInt(storedPoints));

        const today = new Date().toISOString().split('T')[0];

        if (storedDate !== today) {
          setConsumedToday(0);
          setLastConsumedDate(today);
          await AsyncStorage.setItem('lastConsumedDate', today);
        } else if (storedConsumed) {
          setConsumedToday(parseInt(storedConsumed));
          setLastConsumedDate(storedDate);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    AsyncStorage.setItem('points', points.toString());
  }, [points]);

  useEffect(() => {
    AsyncStorage.setItem('consumedToday', consumedToday.toString());

    const today = new Date().toISOString().split('T')[0];
    AsyncStorage.setItem('lastConsumedDate', today);
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
