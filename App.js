import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import FilmesScreen from './src/screens/FilmesScreen';
import SeriesScreen from './src/screens/SeriesScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import InicioScreen from './src/screens/InicioScreen';
import SobreScreen from './src/screens/SobreScreen';
import ContatoScreen from './src/screens/ContatoScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FilmesStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTintColor: '#b5dafe', headerTitleStyle: { color: '#fff' }, headerShadowVisible: false }}
    >
      <Stack.Screen name="ListaFilmes" component={FilmesScreen} options={{ title: 'Filmes' }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function SeriesStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTintColor: '#b5dafe', headerTitleStyle: { color: '#fff' }, headerShadowVisible: false }}
    >
      <Stack.Screen name="ListaSeries" component={SeriesScreen} options={{ title: 'Séries' }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icon = route.name === 'Filmes' ? 'film-outline' : 'tv-outline';
          return <Ionicons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#b5dafe',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#000' },
      })}
    >
      <Tab.Screen name="Filmes" component={FilmesStack} />
      <Tab.Screen name="Séries" component={SeriesStack} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#b5dafe',
          drawerInactiveTintColor: '#b5dafe',
          drawerLabelStyle: { fontSize: 16, color: '#ffffff' },
          drawerStyle: { backgroundColor: '#000' },
          headerStyle: { backgroundColor: '#141414' },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name="Início"
          component={TabNavigator}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="information-circle-outline" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="mail-outline" size={22} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}