import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartersPage() {
  const router = useRouter();

  // Temporary example data — later this will come from chef’s input
  const starters = [
    { id: '1', name: 'Bruschetta', description: 'Toasted bread with tomato and basil', price: 50 },
    { id: '2', name: 'Chicken Wings', description: 'Crispy wings with BBQ sauce', price: 70 },
    { id: '3', name: 'Spring Rolls', description: 'Veggie rolls with sweet chili sauce', price: 45 },
  ];

  const handleOrder = (item) => {
    alert(`You ordered: ${item.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥗 Starters Menu</Text>

      <FlatList
        data={starters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R{item.price}</Text>

            <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder(item)}>
              <Text style={styles.orderText}>Order</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Text style={styles.backText}>⬅ Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  dishName: {
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    color: '#E53935',
  },
  orderButton: {
    backgroundColor: '#E53935',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  orderText: {
    color: '#fff',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#757575',
    borderRadius: 6,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontWeight: '600',
  },
});