import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './Category'; // Main Category screen
import FoodSelection from './components/FoodSelection'; // FoodSelection screen

const Stack = createNativeStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoryScreen" component={Category} />
      <Stack.Screen name="FoodSelection" component={FoodSelection} />
    </Stack.Navigator>
  );
}