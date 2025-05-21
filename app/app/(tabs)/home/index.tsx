import { View, Text, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../../../styles/home';
import { useRouter } from 'expo-router';
import { useWater } from '@/context/WaterContext';

export default function Home() {
  const router = useRouter();
  const { dailyGoal, consumedToday } = useWater();

  const progresso = consumedToday / dailyGoal;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais um gole para o sucesso!</Text>

      <View style={styles.progressContainer}>
        <Progress.Circle
          size={250}
          progress={progresso}
          showsText={false}
          formatText={() => `${consumedToday}ml\nde ${dailyGoal}ml`}
          color="#2563EB"
          borderWidth={1}
          thickness={10}
          borderColor='#E5E7EB'
          unfilledColor="#E5E7EB"
          textStyle={styles.progressText}
        />
      </View>

      <View style={styles.progressTextContainer}>
        <Text style={styles.quantidadeTexto}>{consumedToday}ml</Text>
        <Text style={styles.metaTexto}>de {dailyGoal}ml</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/app/(tabs)/home/registerSip')}
      >
        <Text style={styles.buttonText}>Registrar gole</Text>
      </Pressable>
    </View>
  );
}
