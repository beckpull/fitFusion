import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import UserImage from '../components/profile/UserImage';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '../components/profile/IconButton';
import { useState, useEffect } from 'react';
import VerticalTabs from '../components/profile/VerticalTabs';

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
      uploadImage(result.assets[0]);
    } else {
      Alert.alert('You did not select any image.');
    }

  };

  const uploadImage = async (image) => {
    let formData = new FormData();
    formData.append('image', {
      uri: image.uri,
      type: 'image/jpeg', // or 'image/png'
      name: 'userImage.jpg', // or 'userImage.png'
    });

    try {
      // Replace 'http://my-api.com/upload' with your image upload endpoint
      let response = await axios.post('http://my-api.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      let imageUrl = response.data.imageUrl; // Replace 'imageUrl' with the key your server responds with
      updateUserImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserImage = async (imageUrl) => {
    try {
      // Replace 'http://my-api.com/user' with your user update endpoint
      // Replace 'userId' with the user's ID
      // Replace 'authToken' with the user's auth token
      await axios.put('http://my-api.com/user/userId', { imageUrl }, {
        headers: { Authorization: `Bearer authToken` },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.rowContainer}>
        <TouchableOpacity style={styles.card}>
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
        </TouchableOpacity>

        <VerticalTabs />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageWrapper: {
    marginRight: 16,
  },
  userInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userName: {
    color: '#777',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userWorkouts: {
    color: '#777',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    // shadowColor: 'gray', // iOS
    // shadowOpacity: 0.2, // iOS
    // shadowOffset: { width: 0, height: 4 }, // iOS
    // shadowRadius: 5, // iOS
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', // equivalent to your shadow* properties
    elevation: 3, // Android only
  }
});