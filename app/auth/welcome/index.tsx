import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useRouter, Link } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { useWater } from '@/context/WaterContext';
import styles from './styles';

export default function Welcome() {
  const router = useRouter();
  const { isLoggedIn, setLastNotificationTime } = useWater();
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  useEffect(() => {
    const checkRedirect = async () => {
      const notificationResponse = await Notifications.getLastNotificationResponseAsync();

      if (notificationResponse) {
        // Salva a hora em que a notificação foi tocada
        setLastNotificationTime(new Date());

        if (isLoggedIn) {
          router.replace('/app/(tabs)/home/registerSip');
        } else {
          console.log('Usuário precisa logar primeiro, mas veio de notificação');
        }
        setInitialCheckDone(true);
        return;
      }

      if (isLoggedIn) {
        router.replace('/app/(tabs)/home');
      }

      setInitialCheckDone(true);
    };

    checkRedirect();
  }, [isLoggedIn]);

  if (!initialCheckDone) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../assets/images/welcomeImage.png')}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>De gole em gole a gente chega lá!</Text>
      <View style={styles.buttonsContainer}>
        <Link href="/auth/login" asChild>
          <Pressable style={styles.loginButton}>
            <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
          </Pressable>
        </Link>

        <Link href="/auth/register" asChild>
          <Pressable style={styles.registerButton}>
            <Text style={[styles.buttonText, { color: '#111' }]}>Registrar</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
