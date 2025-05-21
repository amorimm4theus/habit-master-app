import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import NotificationService from '../../../../services/NotificationService';
import * as Notifications from 'expo-notifications';
import { useWater } from '@/context/WaterContext';

export default function RegisterSip() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const {
    addConsumption,
    dailyGoal,
    consumedToday,
    addPoints,
    lastNotificationTime,
    setLastNotificationTime
  } = useWater();

  useEffect(() => {
    // Configura comportamento das notificações em foreground
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: Platform.OS === 'ios',
        shouldShowList: Platform.OS === 'ios',
      }),
    });

    const setupNotifications = async () => {
      await Notifications.cancelAllScheduledNotificationsAsync();
      await NotificationService.scheduleTestNotification();
    };

    setupNotifications();

    const subscription = Notifications.addNotificationReceivedListener(() => {
      setLastNotificationTime(new Date());
    });

    return () => {
      subscription.remove();
    };
  }, [setLastNotificationTime]);

  const handleRegister = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      Alert.alert('Por favor, insira um valor válido.');
      return;
    }

    const amount = Number(inputValue);
    addConsumption(amount);

    const now = new Date();
    const FIVE_MINUTES = 5 * 60 * 1000;

    if (lastNotificationTime && now.getTime() - lastNotificationTime.getTime() <= FIVE_MINUTES) {
      addPoints(10);
      Alert.alert('Parabéns!', `Você registrou ${amount}ml e ganhou 10 pontos por ser rápido!`);
    } else {
      addPoints(5);
      Alert.alert('Boa!', `Você registrou ${amount}ml e ganhou 5 pontos!`);
    }

    router.push('/app/(tabs)/home');
  };

  const remaining = dailyGoal - consumedToday;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quanto você bebeu?</Text>
      <TextInput
        style={styles.input}
        placeholder="0 ml"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar gole</Text>
      </Pressable>
      <Text style={styles.footerText}>
        Faltam <Text style={styles.highlight}>{remaining > 0 ? remaining : 0}ml</Text> para bater a meta diária!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#407BFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#407BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#407BFF',
  },
});
