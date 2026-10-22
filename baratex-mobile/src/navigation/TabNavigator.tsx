import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../config/theme';

import { HomeNavigator } from './HomeNavigator';
import { GaragemNavigator } from './GaragemNavigator';
import { AgendamentosScreen } from '../screens/cliente/Agendamentos';
import { PerfilNavigator } from './PerfilNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 90 : 75,
          paddingTop: 2,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 1,
        },
        tabBarIcon: ({ color }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'search';

          if (route.name === 'Busca') {
            iconName = 'search-outline';
          } else if (route.name === 'Garagem') {
            iconName = 'car-sport-outline';
          } else if (route.name === 'Agendamentos') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Busca" component={HomeNavigator} />
      <Tab.Screen name="Garagem" component={GaragemNavigator} />
      <Tab.Screen name="Agendamentos" component={AgendamentosScreen} />
      <Tab.Screen name="Perfil" component={PerfilNavigator} />
    </Tab.Navigator>
  );
};