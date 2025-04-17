import { View, Text, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../../../styles/home';

export default function Home() {
  const metaDiaria = 2000;
  const quantidadeBebida = 1500;
  const progresso = quantidadeBebida / metaDiaria;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais um gole para o sucesso!</Text>

      <View style={styles.progressContainer}>
        <Progress.Circle
          size={250}
          progress={progresso}
          showsText={false}
          formatText={() => `${quantidadeBebida}ml\nde ${metaDiaria}ml`}
          color="#2563EB"
          borderWidth={1}
          thickness={10}
          borderColor='#E5E7EB'
          unfilledColor="#E5E7EB"
          textStyle={styles.progressText}
        />
      </View>

      <View style={styles.progressTextContainer}>
        <Text style={styles.quantidadeTexto}>{quantidadeBebida}ml</Text>
        <Text style={styles.metaTexto}>de {metaDiaria}ml</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Registrar gole</Text>
      </Pressable>
    </View>
  );
}
