import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: true,
      headerTitleAlign: 'left',
      headerShadowVisible: false,
      tabBarActiveTintColor: '#407BFF',
      headerTitleStyle: {
        color: '#407BFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
      }}
    >
      <Tabs.Screen
      name="(tabs)/home/index"
      options={{  
        title: 'Home',
        tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen
      name="(tabs)/home/_registerSip/index"
      options={{  
        title: 'Home',
        href: null,
      }}
      />
      <Tabs.Screen
      name="(tabs)/ranking/index"
      options={{
        title: 'Ranking',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="trophy" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="(tabs)/profile/index"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  );
}