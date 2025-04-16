import { View, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Seja bem-vindo de volta!</Text>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.inputEmail} />
        <TextInput placeholder="Senha" style={styles.inputSenha} secureTextEntry />

        {/* <Link href="/auth/forgot-password">
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </Link> */}

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Link href="/auth/register" style={{textAlign:'center'}}>
          <Text style={styles.link}>Criar uma nova conta</Text>
        </Link>
      </View>
    </View> 
  );
}
