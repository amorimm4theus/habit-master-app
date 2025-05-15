import { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from '../../../styles/profile';

export default function Profile() {
  const router = useRouter();
  const [editMode, setEditMode] = useState(null);
  const [userData, setUserData] = useState({
    name: 'NomeUsuario',
    dailyGoal: '2000',
    totalConsumed: '44553',
  });
  const [tempValue, setTempValue] = useState('');

  const handleEditStart = (field) => {
    setEditMode(field);
    setTempValue(userData[field]);
  };

  const handleEditSave = () => {
    setUserData(prev => ({
      ...prev,
      [editMode]: tempValue
    }));
    setEditMode(null);
  };

  const handleEditCancel = () => {
    setEditMode(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.userName}>{userData.name}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Pressable
              onPress={() => handleEditStart('dailyGoal')}
              disabled={editMode !== null}
            >
              <Text style={styles.statLabel}>
                Meta diária
                <FontAwesome name="pencil" size={16} color="black" style={{ marginLeft: 8 }} />
              </Text>
            </Pressable>

            {editMode === 'dailyGoal' ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.input}
                  value={tempValue}
                  onChangeText={setTempValue}
                  keyboardType="numeric"
                  autoFocus
                />
                <TouchableOpacity onPress={handleEditSave} style={styles.saveButton}>
                  <FontAwesome name="check" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEditCancel} style={styles.cancelButton}>
                  <FontAwesome name="times" size={20} color="white" />
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.statValue}>{userData.dailyGoal}ml</Text>
            )}
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Pressable
              onPress={() => handleEditStart('totalConsumed')}
              disabled={editMode !== null}
            >
              <Text style={styles.statLabel}>
                Total ingerido
                <FontAwesome name="pencil" size={16} color="black" style={{ marginLeft: 8 }} />
              </Text>
            </Pressable>

            {editMode === 'totalConsumed' ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.input}
                  value={tempValue}
                  onChangeText={setTempValue}
                  keyboardType="numeric"
                  autoFocus
                />
                <TouchableOpacity onPress={handleEditSave} style={styles.saveButton}>
                  <FontAwesome name="check" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEditCancel} style={styles.cancelButton}>
                  <FontAwesome name="times" size={20} color="white" />
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.statValue}>{userData.totalConsumed}ml</Text>
            )}
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