import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

// Example selected items — later these can come from context or navigation params
const exampleStarters: MenuItem[] = [
  { id: '1', name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: 40 },
];

const exampleMains: MenuItem[] = [
  { id: '2', name: 'Steak', description: 'Grilled steak with chips.', price: 120 },
];

const exampleDesserts: MenuItem[] = [
  { id: '3', name: 'Chocolate Cake', description: 'Rich and moist cake.', price: 60 },
];

export default function SummaryScreen(): React.ReactElement {
  const router = useRouter();
  const [starters] = useState<MenuItem[]>(exampleStarters);
  const [mains] = useState<MenuItem[]>(exampleMains);
  const [desserts] = useState<MenuItem[]>(exampleDesserts);

  const handleOrder = () => {
    const total =
      starters.reduce((acc, item) => acc + item.price, 0) +
      mains.reduce((acc, item) => acc + item.price, 0) +
      desserts.reduce((acc, item) => acc + item.price, 0);

    Alert.alert('✅ Order Confirmed', `Total: R ${total}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Starters</Text>
          {starters.length > 0 ? (
            starters.map((item) => (
              <View key={item.id} style={styles.itemBox}>
                <Text style={styles.itemLabel}>Name: <Text style={styles.itemText}>{item.name}</Text></Text>
                <Text style={styles.itemLabel}>Description: <Text style={styles.itemText}>{item.description}</Text></Text>
                <Text style={styles.itemLabel}>Price: <Text style={styles.itemText}>R {item.price}</Text></Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No Starters selected</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mains</Text>
          {mains.length > 0 ? (
            mains.map((item) => (
              <View key={item.id} style={styles.itemBox}>
                <Text style={styles.itemLabel}>Name: <Text style={styles.itemText}>{item.name}</Text></Text>
                <Text style={styles.itemLabel}>Description: <Text style={styles.itemText}>{item.description}</Text></Text>
                <Text style={styles.itemLabel}>Price: <Text style={styles.itemText}>R {item.price}</Text></Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No Mains selected</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Desserts</Text>
          {desserts.length > 0 ? (
            desserts.map((item) => (
              <View key={item.id} style={styles.itemBox}>
                <Text style={styles.itemLabel}>Name: <Text style={styles.itemText}>{item.name}</Text></Text>
                <Text style={styles.itemLabel}>Description: <Text style={styles.itemText}>{item.description}</Text></Text>
                <Text style={styles.itemLabel}>Price: <Text style={styles.itemText}>R {item.price}</Text></Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No Desserts selected</Text>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#5a3825' }]}
          onPress={() => router.back()}
        >
          <Text style={styles.navText}>⬅ Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#ff8c00' }]}
          onPress={handleOrder}
        >
          <Text style={styles.navText}>Order 🧾</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefcf3',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3825',
  },
  scroll: {
    flex: 1,
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5a3825',
    marginBottom: 10,
  },
  itemBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemText: {
    fontWeight: '400',
    color: '#444',
  },
  emptyText: {
    color: '#777',
    fontStyle: 'italic',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 0.45,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});