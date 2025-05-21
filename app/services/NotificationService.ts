import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

class NotificationService {
  constructor() {
    this.configure().catch(console.error);
  }

  async configure() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'Lembretes',
        importance: Notifications.AndroidImportance.HIGH,
        sound: 'default',
        vibrationPattern: [0, 500, 500, 500],
        lightColor: '#FF231F7C',
      });
    }
  }

  async requestPermission() {
    const settings = await Notifications.getPermissionsAsync();

    if (settings.status !== 'granted') {
      const newSettings = await Notifications.requestPermissionsAsync();
      return newSettings.status === 'granted';
    }

    return true;
  }

  async scheduleRecurringNotification(intervalMin: number) {
    const granted = await this.requestPermission();

    if (!granted) {
      console.log('Permissão de notificação negada');
      return;
    }

    await Notifications.cancelAllScheduledNotificationsAsync(); // evitar duplicação

    let notification = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hora de beber água 💧',
        body: 'Clique aqui para registrar e ganhar pontos!',
        sound: true,
        data: {
          timestamp: new Date().toISOString(), // importante
        },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMin * 60,
        repeats: true,
      },
    });
    console.log(notification)
  }

  async scheduleTestNotification() {
    await this.cancelAll();
    this.scheduleRecurringNotification(0.5);
  }

  async cancelAll() {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }
}

export default new NotificationService();
