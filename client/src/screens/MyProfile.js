
import UserImage from '../components/profile/UserImage';
import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Alert, Linking, Modal, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '../components/profile/IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../styles/colors';
import VerticalTabs from '../components/profile/VerticalTabs';
import ReTakeQuiz from '../components/profile/ReTakeQuiz';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_PROFILE_PIC } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { I18nContext } from '../../App';

const PlaceholderImage = require('../assets/images/persona-icon.jpg');

export default function MyProfile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(PlaceholderImage);
  const [updateProfilePic] = useMutation(UPDATE_PROFILE_PIC);
  const { loading, error, data } = useQuery(GET_ME);
  const { i18n } = useContext(I18nContext);

  console.log('Loading:', loading);
  console.log('Error:', error);


  console.log('Data:', data);
  console.log("this is for the PROGILEPIC Property of data: ---> ", data.me.profilePic.data)

  useEffect(() => {
    if(data && data.me && data.me.profilePic.data) {
      //{ uri: PlaceholderImage }
      setImage({uri: `data:image/jpeg;base64,${data.me.profilePic.data}`})
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me: { username, level, workoutPlans } } = data;


  // const handleUpdateImage = async (imageUrl) => {
  //   console.log("URL Image: ", imageUrl);
  //   try {
  //     const { data } = await updateUserImage({
  //       variables: {
  //         imageUrl: imageUrl,
  //       },
  //     });
  //     console.log('Updated user image:', data);
  //   } catch (error) {
  //     console.error('Error updating user image:', error);
  //   }
  // };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const profilePicData = result.assets[0].base64;

      updateProfilePic({
        variables: {
          profilePic: {
            data: profilePicData,
            contentType: 'image/jpeg'
          }
        }
      })
      .then(response => {
        console.log("profile picture updated", response.data);
        setImage({uri: `data:image/jpeg;base64,${profilePicData}`})
      })
      .catch(error => {
        console.error('Error updating picture:', error);
        Alert.alert("Error updating profile picture, please try again");
      })
    } else {
      Alert.alert('You did not select any image.');
    }
    // handleUpdateImage();
  };

  const handleClick = () => {
    const url = 'https://open.spotify.com/playlist/1Tq5PyQCvmwFUW17fxcabR?si=20af5756d6e04664';

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log(`Don't know how to open this URL: ${url}`);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };
  console.log("This is Image: ", image)
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageWrapper}>
            {loading ? <Text>Loading...</Text> : image && (
            <Image
              source={image}
              style={{ width: 100, height: 100, borderRadius: 50 }}
              // placeholderImageSource={PlaceholderImage}
              // selectedImage={selectedImage}
            />
          )}
          </View>

          <View style={styles.userInfoContainer}>
            <IconButton iconName="picture-o" onPress={pickImageAsync} />
            <Text style={styles.userName}>
              {`${i18n.t('welcome')} ${username}`}
            </Text>

            <Text style={styles.userWorkouts}>Lvl: {level}</Text>
            <Text style={styles.userWorkouts}>
              {`${i18n.t('workouts')}: ${workoutPlans.length}`}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleClick}>
          <Icon name="music" size={30} color={Colors.primaryVariant} />
          <View style={styles.cont}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>FitFusion Music</Text>
            <Text>Your best Buddy to work out</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(modalVisible);
            }}
          >
            <ReTakeQuiz onClose={() => setModalVisible(false)} />
          </Modal>
          <TouchableOpacity onPress={() => setModalVisible(prevState => !prevState)}>
            <Text style={styles.link}>Re-take Physical test</Text>
          </TouchableOpacity>
        </View>

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
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
    elevation: 3, // Android only
    marginBottom: 20,
  },
  cont: {
    marginLeft: 15,
  },
  link: {
    color: Colors.primaryVariant,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  }
});