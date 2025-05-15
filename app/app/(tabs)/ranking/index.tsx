import { View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import {useWater}  from '../../../../context/WaterContext';
import styles from '../../../styles/ranking';

export default function Ranking() {
  const router = useRouter();
  const { ranking } = useWater();

  // Dados de exemplo + dados do usuário
  const fullRanking = [ 
    ...ranking,
  ].sort((a, b) => b.points - a.points)
   .map((item, index) => ({ ...item, position: index + 1 }));

  const topFive = fullRanking.slice(0, 5);
  const userRank = fullRanking.find(item => item.isUser) || { position: 0, points: 0 };

  const renderItem = ({ item }) => (
    <View style={[
      styles.rankingItem,
      item.isUser && styles.userRankingItem
    ]}>
      <Text style={styles.position}>{item.position}º</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>{item.points} pontos</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melhores da Semana</Text>

      <FlatList
        data={topFive}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.divider} />

      <Text style={styles.title}>
        Você está em <Text style={{ fontWeight: 'bold', color: '#407BFF' }}>
          {userRank.position}º
        </Text> lugar com {userRank.points} pontos
      </Text>
      
      {userRank.position > 5 && (
        <FlatList
          data={[userRank]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={{...styles.listContainer, height: 80}}
        />
      )}
    </View>
  );
}