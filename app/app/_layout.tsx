import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

import  {WaterProvider}  from '../../context/WaterContext';



import * as Notifications from 'expo-notifications';

// Permitir que notificações apareçam com o app aberto
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});


export default function TabLayout() {
  return (
    <WaterProvider>
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
      name="(tabs)/home/registerSip/index"
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
    </WaterProvider>
  );
}