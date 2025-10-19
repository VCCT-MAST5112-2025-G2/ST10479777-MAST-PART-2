// app/_layout.tsx
import React, { JSX } from 'react';
import { Stack } from 'expo-router';
import { MenuProvider } from '../context/MenuContext';

export default function RootLayout(): JSX.Element {
  return (
    // Wrap the whole app so every screen can access the menu via useMenu()
    <MenuProvider>
      {/* Using default Stack; expo-router will automatically load files from /app */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ff8c00' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#fff7e6' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="starters" options={{ title: 'Starters' }} />
        <Stack.Screen name="mains" options={{ title: 'Mains' }} />
        <Stack.Screen name="desserts" options={{ title: 'Desserts' }} />
        <Stack.Screen name="chefsInput" options={{ title: "Chef's Input" }} />
        <Stack.Screen name="filter" options={{ title: 'Filter' }} />
        <Stack.Screen name="manage" options={{ title: 'Manage' }} />
      </Stack>
    </MenuProvider>
  );
}