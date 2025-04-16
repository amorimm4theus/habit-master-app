import { View, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Criar uma conta</Text>
        <Text style={styles.subtitle}>Crie uma conta para criar hábitos!</Text>
      </View>

      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.inputEmail} />
        <TextInput placeholder="Senha" style={styles.inputSenha} secureTextEntry />
        <TextInput placeholder="Confirme a senha" style={styles.inputSenha} secureTextEntry />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </Pressable>

        <Link href="/auth/login" style={{ textAlign: 'center' }}>
          <Text style={styles.link}>Já tenho uma conta!</Text>
        </Link>
      </View>
    </View>
  );
}