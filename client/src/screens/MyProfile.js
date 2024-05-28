import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserImage from '../components/profile/UserImage';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

import IconButton from '../components/profile/IconButton';

import { useState } from 'react';

const PlaceholderImage = require('../assets/images/persona-icon.jpg');

export default function MyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }

  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <UserImage
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>

        <View style={styles.userInfoContainer}>
          <IconButton iconName="picture-o" onPress={pickImageAsync} />
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userWorkouts}>Workouts: 10</Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingStart: 20,
  },
  imageWrapper: {
    width: '30%',
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 3 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 5, // iOS
    elevation: 5, // Android only
  },
  userInfoContainer: {
    width: '70%',
    justifyContent: 'space-around', 
  },
  userName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userWorkouts: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});