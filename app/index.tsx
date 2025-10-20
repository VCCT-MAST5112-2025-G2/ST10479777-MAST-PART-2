// app/index.tsx  (Homepage)
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';

export default function HomeScreen(): React.ReactElement {
  const router = useRouter();
  const { menu } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Menu 🍽</Text>
      <Text style={styles.countText}>Total Items Available: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>
              {item.name} - R {item.price} ({item.category})
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Chef has not added any items yet.</Text>}
      />

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/chefsinput')}>
        <Text style={styles.navText}>👨‍🍳 Go to Chef Input</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/starters')}>
        <Text style={styles.navText}>🥗 View Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/mains')}>
        <Text style={styles.navText}>🍝 View Mains</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/desserts')}>
        <Text style={styles.navText}>🍰 View Desserts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/filter')}>
        <Text style={styles.navText}>🔍 Filter Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/summary')}>
        <Text style={styles.navText}>📝 View Summary</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff7e6' },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#5a3825' },
  countText: { fontSize: 16, textAlign: 'center', marginBottom: 15, color: '#333' },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 8 },
  itemText: { fontSize: 16, color: '#333' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 20 },
  navButton: { marginTop: 10, backgroundColor: '#5a3825', paddingVertical: 12, borderRadius: 8 },
  navText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});