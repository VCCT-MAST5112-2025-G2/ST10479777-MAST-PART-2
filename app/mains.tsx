import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function Mains() {
  const [mainMenu] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken with herbs and spices.',
      price: 120,
    },
    {
      id: '2',
      name: 'Beef Steak',
      description: 'Tender beef steak cooked to perfection.',
      price: 180,
    },
    {
      id: '3',
      name: 'Lamb Chops',
      description: 'Seasoned lamb chops served with vegetables.',
      price: 200,
    },
  ]);

  const handleOrder = (item: MenuItem) => {
    alert(`✅ You ordered: ${item.name} — R${item.price}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍽 Main Course Menu</Text>
      <FlatList
        data={mainMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Price: R{item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleOrder(item)}
            >
              <Text style={styles.buttonText}>Order</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});