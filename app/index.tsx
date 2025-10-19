import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen(): React.ReactElement {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
  
      <Text style={styles.title}>Welcome to Our Restaurant 🍽</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/starters' as any)}>
        <Text style={styles.buttonText}>Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/mains' as any)}>
        <Text style={styles.buttonText}>Main Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/desserts' as any)}>
        <Text style={styles.buttonText}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/chefsInput' as any)}>
        <Text style={styles.buttonText}>Chef's Input</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/filter' as any)}>
        <Text style={styles.buttonText}>Filter Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/manage' as any)}>
        <Text style={styles.buttonText}>Manage Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5a3825',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});