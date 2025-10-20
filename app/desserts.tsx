// app/mains.tsx
import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, FlatList, Image,Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';  // ✅ Import your menu context

type desserts = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const dessertsData: desserts[] = [
  {
    id: '1',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie with ice cream.',
    price: 65,
    image: 'https://via.placeholder.com/200x120.png?text=Garlic+Bread',
  },
  {
    id: '2',
    name: 'Cheesecake',
    description: 'Classic cheesecake with a berry topping.',
    price: 70,
    image: 'https://via.placeholder.com/200x120.png?text=Soup+of+the+Day',
  },
  {
    id: '3',
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce.',
    price: 55,
    image: 'https://via.placeholder.com/200x120.png?text=Spring+Rolls',
  },
  {
    id: '4',
    name: 'Malva Pudding',
    description: 'Traditional South African dessert with custard.',
    price: 130,
    image: 'https://via.placeholder.com/200x120.png?text=Spring+Rolls',
  },
];

export default function DessertsScreen(): React.ReactElement {
  const router = useRouter();
  const { addToOrder} = useMenu(); // ✅ Access addItem from context

  const handleAdd = (desserts: desserts) => {
    // Add to global menu order
    addToOrder({
      id: desserts.id,
      name: desserts.name,
      description: desserts.description,
      price: desserts.price,
      category: 'dessert', // 👈 Important for filtering later
    });

    Alert.alert('✅ Added to Order', `${desserts.name} has been added.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desserts</Text>

      <FlatList
        data={dessertsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R {item.price}</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAdd(item)}
            >
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Navigation Buttons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.back()}
        >
          <Text style={styles.navText}>⬅ Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/filter')}
        >
          <Text style={styles.navText}>Next ➡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 🎨 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5a3825',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  navButton: {
    flex: 0.45,
    backgroundColor: '#5a3825',
    paddingVertical: 12,
    borderRadius: 8,
  },
  navText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});