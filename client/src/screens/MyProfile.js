import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import UserImage from '../components/profile/UserImage';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '../components/profile/IconButton';
import { useState } from 'react';
import Colors from '../styles/colors';
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
    } else {
      Alert.alert('You did not select any image.');
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
    // backgroundColor: Colors.primary,
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
    shadowColor: 'gray', // iOS
    shadowOpacity: 0.2, // iOS
    shadowOffset: { width: 0, height: 4 }, // iOS
    shadowRadius: 5, // iOS
    elevation: 3, // Android only
  }
});