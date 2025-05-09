import { View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../../../styles/ranking';





export default function Ranking() {
  const router = useRouter();

  const rankingDataTopFive = [
    { id: '1', name: 'João Silva', position: 1, amount: 3000 },
    { id: '2', name: 'Maria Souza', position: 2, amount: 2800 },
    { id: '3', name: 'Carlos Oliveira', position: 3, amount: 2500 },
    { id: '4', name: 'Ana Santos', position: 4, amount: 2300 },
    { id: '5', name: 'Pedro Costa', position: 5, amount: 2100 },
  ];
  
  const userRankingData = [
    { id: '6', name: 'Você', position: 23, amount: 2000 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.rankingItem}>
      <Text style={styles.position}>{item.position}º</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.amount}ml</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melhores da Semana</Text>

      <FlatList
        data={rankingDataTopFive}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.divider} />

      <Text style={styles.title}>Você terminou a semana em <Text style={{ fontWeight: 'bold',color:'black' }}>{userRankingData[0].position}º</Text> lugar</Text>
      <FlatList
        data={userRankingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={{...styles.listContainer, height: 80}}
      />
    </View>
  );
}

