import { useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useRouter, Link } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { useWater } from '@/context/WaterContext';
import styles from './styles';

export default function Welcome() {
  const router = useRouter();
  const { isLoggedIn } = useWater();

  useEffect(() => {
    const checkRedirect = async () => {
      const lastNotification = await Notifications.getLastNotificationResponseAsync();

      if (lastNotification) {
        // App foi aberto por notificação
        router.replace('/app/(tabs)/home/registerSip');
        return;
      }

      if (isLoggedIn) {
        // Usuário já está logado
        router.replace('/app/(tabs)/home');
      }
    };

    checkRedirect();
  }, [isLoggedIn]);

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
