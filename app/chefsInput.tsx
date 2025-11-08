// app/chefsinput.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';

type Category = 'starter' | 'main' | 'dessert';

export default function ChefsInputScreen(): React.ReactElement {
  const router = useRouter();
  const { menu, addItem, removeItem, updateItem } = useMenu();

  // States for adding new items
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState<Category>('starter');

  // States for editing existing items
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const handleRemove = (id: string) => {
    removeItem(id);
    Alert.alert('🗑 Removed', 'The item has been removed from the menu.');
  };

  const handleStartEdit = (id: string, name: string, description: string, price: number) => {
    setEditId(id);
    setEditName(name);
    setEditDescription(description);
    setEditPrice(price.toString());
  };

  const handleSaveEdit = () => {
    if (editId && editName.trim() && editPrice.trim()) {
      updateItem({
        id: editId,
        name: editName,
        description: editDescription,
        price: Number(editPrice),
        category: menu.find((item) => item.id === editId)?.category || 'starter',
      });
      setEditId(null);
      setEditName('');
      setEditDescription('');
      setEditPrice('');
      Alert.alert('✅ Updated', 'The menu item has been updated.');
    } else {
      Alert.alert('⚠ Error', 'Please fill in name and price before saving.');
    }
  };

  const handleAddNew = () => {
    if (newName.trim() && newPrice.trim()) {
      addItem({
        id: Date.now().toString(),
        name: newName,
        description: newDescription,
        price: Number(newPrice),
        category: newCategory,
      });
      setNewName('');
      setNewDescription('');
      setNewPrice('');
      setNewCategory('starter');
      Alert.alert('✅ Added', 'New item has been added to the menu.');
    } else {
      Alert.alert('⚠ Error', 'Please enter a name and price.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef’s Input 👨🏽‍🍳</Text>

      {/* ➕ Add New Menu Item */}
      <View style={styles.addSection}>
        <TextInput
          style={styles.input}
          placeholder="Dish name"
          value={newName}
          onChangeText={setNewName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={newDescription}
          onChangeText={setNewDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Price (R)"
          keyboardType="numeric"
          value={newPrice}
          onChangeText={setNewPrice}
        />

        {/* Category Selection */}
        <View style={styles.categoryRow}>
          {(['starter', 'main', 'dessert'] as Category[]).map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                newCategory === cat && styles.categoryButtonSelected,
              ]}
              onPress={() => setNewCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  newCategory === cat && styles.categoryTextSelected,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
          <Text style={styles.addButtonText}>🧺Add Item</Text>
        </TouchableOpacity>
      </View>

      {/* 📜 Menu List */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No items in the menu yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editId === item.id ? (
              <>
                <TextInput
                  style={styles.input}
                  value={editName}
                  onChangeText={setEditName}
                  placeholder="Edit name"
                />
                <TextInput
                  style={styles.input}
                  value={editDescription}
                  onChangeText={setEditDescription}
                  placeholder="Edit description"
                />
                <TextInput
                  style={styles.input}
                  value={editPrice}
                  onChangeText={setEditPrice}
                  keyboardType="numeric"
                  placeholder="Edit price"
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveEdit}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.itemText}>
                  {item.name} - R {item.price} ({item.category})
                </Text>
                {item.description ? (
                  <Text style={styles.descriptionText}>{item.description}</Text>
                ) : null}
                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() =>
                      handleStartEdit(item.id, item.name, item.description ?? '', item.price)
                    }
                  >
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRemove(item.id)}>
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
      />

      {/* ⬅ Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 Styling
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff7e6' },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#5a3825' },

  addSection: { marginBottom: 20 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  categoryRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  categoryButtonSelected: { backgroundColor: '#ff8c00' },
  categoryText: { color: '#333', fontWeight: '600' },
  categoryTextSelected: { color: '#fff' },
  addButton: { backgroundColor: '#5a3825', paddingVertical: 10, borderRadius: 8 },
  addButtonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },

  card: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 8 },
  itemText: { fontSize: 16, color: '#333', marginBottom: 5 },
  descriptionText: { fontSize: 14, color: '#666', marginBottom: 5 },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  editText: { color: '#ff8c00', fontWeight: '600' },
  removeText: { color: 'red', fontWeight: '600' },
  saveButton: { backgroundColor: 'green', padding: 8, borderRadius: 8, marginTop: 5 },
  saveText: { color: '#fff', textAlign: 'center' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 20 },
  backButton: { marginTop: 20, backgroundColor: '#5a3825', paddingVertical: 10, borderRadius: 8 },
  backText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});