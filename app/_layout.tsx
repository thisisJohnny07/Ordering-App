import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from './sidebar';

const styles = StyleSheet.create({
  header: {
    height: 110,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 95,
    height: 95,
    marginTop: 10,
  },
});

function CustomHeader({ onMenuPress }: { onMenuPress: () => void }) {
  return (
    <View style={styles.header}>
      {/* Menu Button */}
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={35} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

export default function RootLayout() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Stack Navigator */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="chooseOrderType" options={{ headerShown: false }} />
        <Stack.Screen
          name="bottomNavigation"
          options={{
            headerShown: true,
            header: () => <CustomHeader onMenuPress={toggleSidebar} />,
          }}
        />
      </Stack>

      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      <StatusBar style="auto" />
    </>
  );
}