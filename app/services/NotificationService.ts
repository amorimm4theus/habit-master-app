// services/NotificationService.ts
import * as Notifications from 'expo-notifications';

// Configurar canal de notificação para Android
const configureNotifications = async () => {
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Default',
    importance: Notifications.AndroidImportance.HIGH,
    sound: 'default',
    vibrationPattern: [0, 250, 250, 250],
  });
};

class NotificationService {
  constructor() {
    configureNotifications().catch(error => 
      console.error('Erro na configuração de notificações:', error));
  }

  async scheduleDailyNotifications(hours: number[]): Promise<void> {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permissão para notificações negada');
      return;
    }

    for (const hour of hours) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Hora de beber água! 💧',
          body: 'Não se esqueça de se hidratar!',
          sound: true,
          channelId: 'default',
        },
        trigger: {
          hour,
          minute: 0,
          repeats: true,
        },
      });
    }
  }

  async scheduleTestNotification(): Promise<void> {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Teste de Notificação',
        body: 'Funcionou! 🎉',
        sound: true,
        channelId: 'default',
      },
      trigger: {
        seconds: 20,
        repeats: true,
      },
    });
  }
}

export default new NotificationService();