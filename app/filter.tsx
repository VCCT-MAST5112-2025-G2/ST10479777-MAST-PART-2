import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Filter() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Menu by Course</Text>

      <Text style={styles.subtitle}>
        Tap a category below to view items in that course.
      </Text>

      {/* BUTTONS */}
      <Pressable style={styles.button} onPress={() => router.push("/starters")}>
        <Text style={styles.buttonText}>Starters🥐</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/mains")}>
        <Text style={styles.buttonText}>Mains🍝</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/desserts")}>
        <Text style={styles.buttonText}>Desserts 🎂</Text>
      </Pressable>
    </View>
  );
}
// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    width: "85%",
    paddingVertical: 18,
    backgroundColor: "#5a3825",
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.2, 
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});