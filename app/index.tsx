import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';

export default function HomePage(): React.ReactElement {
  const router = useRouter();
  const { menu } = useMenu();

  // Total calculations
  const totalItems = menu.length;
  const totalPrice = menu.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍🍳 Christoffel’s kitchen where flavour meets finesse.</Text>

      

      {/* Total Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
        <Text style={styles.summaryText}>Total Price: R {totalPrice}</Text>
      </View>

      {/*  Display Menu Items */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No items yet. Add some from Starters, Mains, Desserts, or Chef’s Input.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCategory}>({item.category})</Text>
            <Text style={styles.itemPrice}>R {item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/*  Navigation Buttons */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/starters')}>
          <Text style={styles.navText}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/mains')}>
          <Text style={styles.navText}>Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/desserts')}>
          <Text style={styles.navText}>Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/chefsinput')}>
          <Text style={styles.navText}>Chef’s Input 👨🏽‍🍳</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
    color: '#5a3825',
  },
  summary: {
    backgroundColor: '#ffecd1',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5a3825',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemCategory: {
    fontSize: 14,
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ff8c00',
  },
  navContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#5a3825',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexBasis: '48%',
  },
  navText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30,
    fontSize: 14,
  },
});