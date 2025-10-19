import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300x200' }} // You can replace with your own image
        style={styles.image}
      />

      {/* Description Section */}
      <Text style={styles.description}>
        Welcome to our restaurant app. Explore our Starters, Mains, Desserts and more!
      </Text>

      {/* Scrollable Menu Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonRow}>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/starters')}>
          <Text style={styles.menuButtonText}>Starters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/mains')}>
          <Text style={styles.menuButtonText}>Mains</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/desserts')}>
          <Text style={styles.menuButtonText}>Desserts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/chefsinput')}>
          <Text style={styles.menuButtonText}>Chef's Input</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/filter')}>
          <Text style={styles.menuButtonText}>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/summary')}>
          <Text style={styles.menuButtonText}>Summary</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});