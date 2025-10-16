import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Welcome to the Restaurant Menu</Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/starters')}>
        <Text style={styles.buttonText}>View Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/mains')}>
        <Text style={styles.buttonText}>View Main Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/desserts')}>
        <Text style={styles.buttonText}>View Desserts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/chefsInput')}>
        <Text style={styles.buttonText}>Chef's Input</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/filter')}>
        <Text style={styles.buttonText}>Filter Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/manage')}>
        <Text style={styles.buttonText}>Manage Menu</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Total Menu Items: 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E53935',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#757575',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
  },
});