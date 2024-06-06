import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserImage({ username, selectedImage }) {
  const firstChar = username.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      ) : (
        <Text style={styles.text}>{firstChar}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', // Text color
    backgroundColor: '#ccc', // Placeholder background color
    width: 100,
    height: 100,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
