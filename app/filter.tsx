import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: 'starter' | 'main' | 'dessert';
};

export default function FilterMenuScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');

  // You can later replace this with actual data (e.g., from ChefInput page or a file)
  const [menu] = useState<MenuItem[]>([
    { id: '1', name: 'Garlic Bread', price: 45, category: 'starter' },
    { id: '2', name: 'Steak', price: 120, category: 'main' },
    { id: '3', name: 'Chocolate Cake', price: 60, category: 'dessert' },
    { id: '4', name: 'Salad', price: 35, category: 'starter' },
    { id: '5', name: 'Chicken Pasta', price: 95, category: 'main' },
  ]);

  // Filter logic
  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu 🔎</Text>

      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.priceText}>R {item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items match your search.</Text>
        }
      />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3825',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5a3825',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
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