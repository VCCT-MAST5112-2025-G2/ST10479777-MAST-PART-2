import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export default function ManageScreen() {
  const router = useRouter();
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: '1', name: 'Garlic Bread', price: 45, category: 'starter' },
    { id: '2', name: 'Steak', price: 120, category: 'main' },
    { id: '3', name: 'Chocolate Cake', price: 60, category: 'dessert' },
  ]);

  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>('');
  const [editPrice, setEditPrice] = useState<string>('');

  const removeItem = (id: string) => {
    setMenu(menu.filter(item => item.id !== id));
  };

  const startEditing = (item: MenuItem) => {
    setEditId(item.id);
    setEditName(item.name);
    setEditPrice(item.price.toString());
  };

  const saveEdit = () => {
    if (editId) {
      setMenu(menu.map(item =>
        item.id === editId
          ? { ...item, name: editName, price: Number(editPrice) }
          : item
      ));
      setEditId(null);
      setEditName('');
      setEditPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu 🍽</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editId === item.id ? (
              <>
                <TextInput
                  style={styles.input}
                  value={editName}
                  onChangeText={setEditName}
                  placeholder="Edit dish name"
                />
                <TextInput
                  style={styles.input}
                  value={editPrice}
                  onChangeText={setEditPrice}
                  keyboardType="numeric"
                  placeholder="Edit price"
                />
                <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.itemText}>
                  {item.name} - R {item.price} ({item.category})
                </Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => startEditing(item)}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeItem(item.id)}>
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
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
  container: { flex: 1, padding: 20, backgroundColor: '#fff7e6' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#5a3825' },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 8 },
  itemText: { fontSize: 16, color: '#333', marginBottom: 5 },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  editText: { color: 'orange', fontWeight: '600' },
  removeText: { color: 'red', fontWeight: '600' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 10 },
  saveButton: { backgroundColor: 'green', padding: 8, borderRadius: 8 },
  saveText: { color: '#fff', textAlign: 'center' },
  backButton: { marginTop: 20, backgroundColor: '#5a3825', paddingVertical: 10, borderRadius: 8 },
  backText: { color: '#fff', textAlign: 'center' },
});