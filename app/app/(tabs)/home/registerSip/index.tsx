import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegisterSip() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      Alert.alert('Por favor, insira um valor válido.');
      return;
    }

    /* dps salvar na api */
    
    Alert.alert(`Parabéns`,`Você registrou ${inputValue}ml!`);
    router.push('/app/(tabs)/home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quanto você bebeu?</Text>

      <TextInput
        style={styles.input}
        placeholder="0 ml"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar gole</Text>
      </Pressable>

      <Text style={styles.footerText}>
        Faltam <Text style={styles.highlight}>2000ml</Text> para bater a meta diária!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#407BFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#407BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#407BFF',
  },
});