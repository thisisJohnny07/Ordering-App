import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from './Category'; // Import Category screen
import Cart from './Cart'; // Import Cart screen
import Table from './Table'; 
const Drawer = createDrawerNavigator();

export default function SidebarNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
        drawerStyle: {
          backgroundColor: '#ffffff', // Background color of the drawer
          width: 240, // Width of the drawer
        },
      }}
    >
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Table" component={Table} />
    </Drawer.Navigator>
  );
}