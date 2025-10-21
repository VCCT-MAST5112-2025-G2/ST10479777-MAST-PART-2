// app/starters.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext'; // ✅ Import menu context

type Mains = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const mainsData: Mains[] = [
  {
    id: '1',
    name: 'Grilled Chicken',
    description: 'Juicy gilled chicken with herbs.',
    price: 80,
    image: 'https://via.placeholder.com/200x120.png?text=Garlic+Bread',
  },
  {
    id: '2',
    name: 'Beef Steak',
    description: 'Juicy griled beef served with sides.',
    price: 190,
    image: 'https://via.placeholder.com/200x120.png?text=Soup+of+the+Day',
  },
  {
    id: '3',
    name: 'Alfredo pasta',
    description: 'Creamy Pasta with mint sauce.',
    price: 50,
    image: 'https://via.placeholder.com/200x120.png?text=Spring+Rolls',
  },
   {
    id: '4',
    name: 'Lamb Chops',
    description: 'Tender lamb chops with rosemary.',
    price: 175,
    image: 'https://via.placeholder.com/200x120.png?text=Spring+Rolls',
  },
];

export default function MainsScreen(): React.ReactElement {
  const router = useRouter();
  const { addItem } = useMenu(); // ✅ Correct function name from context

  const handleAdd = (mains: Mains) => {
    // Add the item to the global context
    addItem({
      id: mains.id,
      name: mains.name,
      description: mains.description,
      price: mains.price,
      category: 'main',
    });

    Alert.alert('✅ Added to Order', `${mains.name} has been added to your order.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mains</Text>

      <FlatList
        data={mainsData}
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
          onPress={() => router.push('/desserts')}
        >
          <Text style={styles.navText}>Next ➡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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