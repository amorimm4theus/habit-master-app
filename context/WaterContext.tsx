import React, { createContext, useState, useContext } from 'react';

interface WaterContextProps {
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

function WaterProvider({ children }: { children: React.ReactNode }) {
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [consumedToday, setConsumedToday] = useState(0);
  const [points, setPoints] = useState(0);
  const [lastNotificationTime, setLastNotificationTime] = useState<Date | null>(null);
  const [ranking, setRanking] = useState<RankingItem[]>([
    { id: '1', name: 'João', points: 150 },
    { id: '2', name: 'Maria', points: 120 },
    { id: '4', name: 'Maria', points: 120 },
    { id: '5', name: 'Maria', points: 120 },
    { id: '6', name: 'Maria', points: 120 },
    { id: 'user', name: 'Você', points: 80, isUser: true }
  ]);

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
    setRanking(prev => {
      const updated = prev.map(item =>
        item.isUser ? { ...item, points: item.points + newPoints } : item
      );
      return updated.sort((a, b) => b.points - a.points);
    });
  };

  return (
    <WaterContext.Provider
      value={{
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

// 👇 Correção importante para manter a compatibilidade nos imports
export { WaterProvider };

export function useWater() {
  const context = useContext(WaterContext);
  if (!context) {
    throw new Error('useWater must be used within a WaterProvider');
  }
  return context;
}
