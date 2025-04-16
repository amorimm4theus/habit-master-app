import { View, Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles';

export default function Welcome() {
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


