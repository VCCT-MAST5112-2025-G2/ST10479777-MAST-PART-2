import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Picker, ScrollView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChefInputPage() {
  const router = useRouter();

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');
  const [menu, setMenu] = useState([]); // 🧠 this stores all dishes

  const handleAddDish = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Missing Info', 'Please fill in all fields.');
      return;
    }

    const newDish = {
      id: Date.now().toString(),
      dishName,
      description,
      course,
      price,
    };

    setMenu([...menu, newDish]);
    setDishName('');
    setDescription('');
    setPrice('');
    setCourse('Starters');
    Alert.alert('Success', `Dish "${newDish.dishName}" added to ${newDish.course}`);
  };

  const handleRemoveDish = (id) => {
    const updatedMenu = menu.filter((item) => item.id !== id);
    setMenu(updatedMenu);
  };

  const renderDish = ({ item }) => (
    <View style={styles.dishItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.dishName}>{item.dishName} - R{item.price}</Text>
        <Text style={styles.dishDesc}>{item.description}</Text>
        <Text style={styles.dishCourse}>{item.course}</Text>
      </View>
      <TouchableOpacity style={styles.removeBtn} onPress={() => handleRemoveDish(item.id)}>
        <Text style={styles.removeText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👨‍🍳 Chef's Menu Input</Text>

      {/* Add dish form */}
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Garlic Bread"
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="e.g. Warm bread with garlic butter"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Course</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
        >
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 50"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddDish}>
        <Text style={styles.addText}>Add Dish</Text>
      </TouchableOpacity>

      {/* Menu list */}
      <Text style={styles.subTitle}>📜 Current Menu</Text>
      {menu.length === 0 ? (
        <Text style={styles.emptyText}>No dishes added yet.</Text>
      ) : (
        <FlatList
          data={menu}
          renderItem={renderDish}
          keyExtractor={(item) => item.id}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Text style={styles.backText}>⬅ Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  multiline: {
    height: 80,
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#43A047',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600',
  },
  dishDesc: {
    color: '#555',
    fontSize: 14,
  },
  dishCourse: {
    color: '#999',
    fontSize: 12,
  },
  removeBtn: {
    backgroundColor: '#e53935',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeText: {
    color: '#fff',
    fontSize: 18,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  backButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#757575',
    borderRadius: 6,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontWeight: '600',
  },
});