import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export default function ChefInputScreen() {
  const router = useRouter();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState<string>('');
  const [dishPrice, setDishPrice] = useState<string>('');

  const addItem = () => {
    if (dishName.trim() !== '' && dishPrice.trim() !== '') {
      const newItem: MenuItem = {
        id: Date.now().toString(),
        name: dishName,
        price: Number(dishPrice),
      };
      setMenu([...menu, newItem]);
      setDishName('');
      setDishPrice('');
    }
  };

  const removeItem = (id: string) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef’s Input 👨‍🍳</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (R)"
        keyboardType="numeric"
        value={dishPrice}
        onChangeText={setDishPrice}
      />

      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.addText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>{item.name} - R {item.price}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
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
    padding: 20,
    backgroundColor: '#fff7e6',
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
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  addText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
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
  removeText: {
    color: 'red',
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