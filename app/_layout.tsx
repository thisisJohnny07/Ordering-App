import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="chooseOrderType" options={{ headerShown: false }} />
        <Stack.Screen name="bottomNavigation" options={{ headerShown: false }} />

      </Stack>
      <StatusBar style="auto" />
    </>
  );
}