import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserImage({ username, selectedImage }) {
  const firstChar = username.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{firstChar}</Text>
        </View>
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
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
