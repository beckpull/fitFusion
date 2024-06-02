import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import UserImage from '../components/profile/UserImage';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '../components/profile/IconButton';
import VerticalTabs from '../components/profile/VerticalTabs';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER_IMAGE } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const PlaceholderImage = require('../assets/images/persona-icon.jpg');

export default function MyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [updateUserImage] = useMutation(UPDATE_USER_IMAGE);
  const { loading, error, data } = useQuery(GET_ME);
  console.log('Loading:', loading);
  console.log('Error:', error);

  console.log('Data:', data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me: { username } } = data;

  const handleUpdateImage = async (imageUrl) => {
    console.log("URL Image: ", imageUrl);
    try {
      const { data } = await updateUserImage({
        variables: {
          imageUrl: imageUrl, 
        },
      });
      console.log('Updated user image:', data);
    } catch (error) {
      console.error('Error updating user image:', error);
    }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setSelectedImage(imageUri);
      handleUpdateImage(imageUri);
    } else {
      Alert.alert('You did not select any image.');
    }
    handleUpdateImage();
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
            <Text style={styles.userName}>Welcome {username}</Text>
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
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
    elevation: 3, // Android only
  }
});