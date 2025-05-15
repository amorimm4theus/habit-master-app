import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: "water-reminder",
    channelName: "Lembretes de Água",
    channelDescription: "Notificações para lembrar de beber água",
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`Channel created: ${created}`)
);

export const showNotification = (title, message) => {
  PushNotification.localNotification({
    channelId: "water-reminder",
    title: title,
    message: message,
  });
};