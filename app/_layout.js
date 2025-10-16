import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="starters" options={{ title: 'Starters' }} />
      <Stack.Screen name="mains" options={{ title: 'Main Course' }} />
      <Stack.Screen name="desserts" options={{ title: 'Desserts' }} />
      <Stack.Screen name="chefsInput" options={{ title: "Chef's Input" }} />
      <Stack.Screen name="filter" options={{ title: 'Filter Menu' }} />
      <Stack.Screen name="manage" options={{ title: 'Manage Menu' }} />
    </Stack>
  );
}