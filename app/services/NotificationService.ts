import * as Notifications from 'expo-notifications';

class NotificationService {
  async scheduleDailyNotifications(hours: number[]) {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) {
      console.warn('Permissão para notificações negada.');
      return;
    }

    for (const hour of hours) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Hora de beber água!',
          body: 'Não se esqueça de se hidratar!',
          sound: true,
        },
        trigger: {
          hour: hour,
          minute: 0,
          repeats: true,
        },
      });
    }

    console.log('Notificações agendadas.');
  }

  // Novo método para teste: notificação a cada 2 minutos
  async scheduleTestNotifications() {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) {
      console.warn('Permissão para notificações negada.');
      return;
    }

    // Agendar notificação a cada 2 minutos (repetir)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Teste de notificação',
        body: 'Essa é uma notificação de teste a cada 2 minutos!',
        sound: true,
      },
      trigger: {
        seconds: 120, // 2 minutos
        repeats: true,
      },
    });

    console.log('Notificação de teste agendada a cada 2 minutos.');
  }
}

export default new NotificationService();
