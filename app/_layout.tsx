import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="starters" options={{ title: 'Starters' }} />
      <Stack.Screen name="main" options={{ title: 'Main Course' }} />
      <Stack.Screen name="dessert" options={{ title: 'Dessert' }} />
      <Stack.Screen name="chefInput" options={{ title: "Chef's Input" }} />
      <Stack.Screen name="filter" options={{ title: 'Filter Menu' }} />
      <Stack.Screen name="manage" options={{ title: 'Manage Menu' }} />
    </Stack>
  );
}