import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
  return (
    <Tabs 
    screenOptions={{ 
        headerTintColor: '#949494',
        headerStyle: {
          backgroundColor: '#050505',
          borderBottomWidth: 1,
          borderBottomColor: '#949494',       
             
        },
        tabBarActiveTintColor: '#c3da61', 
        tabBarInactiveTintColor: '#949494',
        tabBarStyle: {
          backgroundColor: '#050505',
          borderTopWidth: 1,
          borderTopColor: '#949494',
          paddingBottom: 5,
          paddingTop: 5
        }
     }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}