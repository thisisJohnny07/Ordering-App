import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

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

function CustomHeader() {
  return (
    <View style={styles.header}>
     
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu" size={35} color="black"  />
      </TouchableOpacity>

      <Image
        source={require('../assets/images/icon.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="chooseOrderType" options={{ headerShown: false }} />
        <Stack.Screen
          name="bottomNavigation"
          options={{
            headerShown: true,
            header: () => <CustomHeader />, 
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}