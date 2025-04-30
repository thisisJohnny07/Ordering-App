import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoryStack from './CategoryStack';
import Cart from './Cart';
import Table from './Table';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Category') {
            iconName = 'list';
          } else if (route.name === 'Cart') {
            iconName = 'cart';
          } else if (route.name === 'Table') {
            iconName = 'restaurant';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#313477',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Category" component={CategoryStack} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Table" component={Table} />
    </Tab.Navigator>
  );
}