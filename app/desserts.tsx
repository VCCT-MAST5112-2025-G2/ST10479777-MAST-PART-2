import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';

type Dessert = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const dessertsData: Dessert[] = [
  { id: '1', name: 'Chocolate Brownie', description: 'Warm and gooey with vanilla ice cream.', price: 65 },
  { id: '2', name: 'Cheesecake', description: 'Classic creamy cheesecake with berry topping.', price: 70 },
  { id: '3', name: 'Ice Cream Sundae', description: 'Three scoops with chocolate sauce.', price: 55 },
  { id: '4', name: 'Malva Pudding', description: 'Traditional warm pudding with custard.', price: 60 },
];

export default function DessertsScreen(): React.ReactElement {
  const router = useRouter();

  const handleOrder = (dessertName: string) => {
    Alert.alert('Order Placed 🧾', `You ordered: ${dessertName}`);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desserts Menu 🍰</Text>

      <FlatList
        data={dessertsData}
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