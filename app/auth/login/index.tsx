import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import styles from './styles';
import NotificationService from '@/app/services/NotificationService';
import { useWater } from '@/context/WaterContext';

export default function Login() {
  const router = useRouter(); 
  const { isLoggedIn,setIsLoggedIn } = useWater();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // const validEmail = 'teste@exemplo.com';
    // const validPassword = '123456';
    const validEmail = 'emagoediv@gmail.com';
    const validPassword = 'Matheuss0';

    console.log(email, password);
    if (email === validEmail && password === validPassword) {
      await NotificationService.scheduleRecurringNotification(2);
      setIsLoggedIn(true);
      router.push('/app/(tabs)/home');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Seja bem-vindo de volta!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          style={styles.inputSenha}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Link href="/auth/register" style={{ width: '100%' }}>
          <Text style={styles.link}>Criar uma nova conta</Text>
        </Link>
      </View>
    </View>
  );
}