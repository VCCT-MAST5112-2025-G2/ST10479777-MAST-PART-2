import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';

export default function SummaryScreen(): React.ReactElement {
  const router = useRouter();
  const { order, clearOrder } = useMenu();

  const starters = (order || []).filter((item: any) => item.category === 'starter');
const mains = (order || []).filter((item: any) => item.category === 'main');
const desserts = (order || []).filter((item: any) => item.category === 'dessert');


  const handleOrder = () => {
    const total = order.reduce((acc: number, item: any) => acc + item.price, 0);
    Alert.alert('✅ Order Confirmed', `Total: R ${total}`);
    clearOrder(); // Reset order after placing
  };

  const renderItems = (items: any[]) => (
    items.length > 0 ? items.map(item => (
      <View key={item.id} style={styles.itemBox}>
        <Text style={styles.itemLabel}>Name: <Text style={styles.itemText}>{item.name}</Text></Text>
        <Text style={styles.itemLabel}>Price: <Text style={styles.itemText}>R {item.price}</Text></Text>
      </View>
    )) : <Text style={styles.emptyText}>No items selected</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Starters</Text>
          {renderItems(starters)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mains</Text>
          {renderItems(mains)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Desserts</Text>
          {renderItems(desserts)}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navButton, { backgroundColor: '#5a3825' }]} onPress={() => router.back()}>
          <Text style={styles.navText}>⬅ Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, { backgroundColor: '#ff8c00' }]} onPress={handleOrder}>
          <Text style={styles.navText}>Order 🧾</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefcf3', padding: 20, paddingTop: 30 },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#5a3825' },
  scroll: { flex: 1, marginBottom: 20 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#5a3825', marginBottom: 10 },
  itemBox: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 2 },
  itemLabel: { fontSize: 14, fontWeight: '600', color: '#333' },
  itemText: { fontWeight: '400', color: '#444' },
  emptyText: { color: '#777', fontStyle: 'italic' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-between' },
  navButton: { flex: 0.45, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  navText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});