import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

type Starter = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const startersData: Starter[] = [
  { id: '1', name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 40 },
  { id: '2', name: 'Soup of the Day', description: 'Served with a bread roll.', price: 55 },
  { id: '3', name: 'Spring Rolls', description: 'Crispy rolls with a sweet chili dip.', price: 50 },
];

export default function StartersScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starters Menu 🥗</Text>

      <FlatList
        data={startersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R {item.price}</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderText}>Order</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefcf3',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3825',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    borderRadius: 8,
  },
  orderText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#5a3825',
    paddingVertical: 10,
    borderRadius: 8,
  },
  backText: {
    color: '#fff',
    textAlign: 'center',
  },
});