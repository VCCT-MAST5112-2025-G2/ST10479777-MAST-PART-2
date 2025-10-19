import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';

type MainCourse = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const mainCourseData: MainCourse[] = [
  { id: '1', name: 'Grilled Chicken', description: 'Served with chips and salad.', price: 120 },
  { id: '2', name: 'Beef Steak', description: 'Juicy steak with mushroom sauce.', price: 160 },
  { id: '3', name: 'Pasta Alfredo', description: 'Creamy sauce with parmesan cheese.', price: 110 },
  { id: '4', name: 'Lamb Chops', description: 'Tender chops with mint gravy.', price: 180 },
];

export default function MainCourseScreen(): React.ReactElement {
  const router = useRouter();

  const handleOrder = (itemName: string) => {
    Alert.alert('Order Placed 🧾', `You ordered: ${itemName}`)
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Course Menu 🍽</Text>

      <FlatList
        data={mainCourseData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R {item.price}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => handleOrder(item.name)}
            >
              <Text style={styles.orderText}>Order</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBack}
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
    fontWeight: '600',
  },
});