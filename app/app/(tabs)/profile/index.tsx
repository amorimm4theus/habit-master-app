import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../../../styles/profile';


export default function Profile() {
  const router = useRouter();

  // Dados do usuário - você pode substituir por dados dinâmicos
  const userData = {
    name: 'NomeUsuario',
    dailyGoal: 2000,
    totalConsumed: 44553,
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.userName}>{userData.name}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Pressable
              onPress={() => { alert('Meta diária clicada!'); }}
            >
              <Text style={styles.statLabel}>
                Meta diária
                <FontAwesome name="pencil" size={16} color="black" style={{ marginLeft: 8 }} />

              </Text>
            </Pressable>

            <Text style={styles.statValue}>{userData.dailyGoal}ml</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Pressable
              onPress={() => { alert('Total ingerido clicado!'); }}
            >
              <Text style={styles.statLabel}>
                Total ingerido
                <FontAwesome name="pencil" size={16} color="black" style={{ marginLeft: 8 }} />

              </Text>
            </Pressable>

            <Text style={styles.statValue}>
              {userData.totalConsumed}ml
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <Pressable style={styles.logoutButton}>
        <Text style={styles.footerTitle}>Sair</Text>
      </Pressable>
    </View>
  );
}

