import {React, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import VideoBackGround from '../components/landingPage/VideoBackGround';
import Title from '../components/landingPage/Title';
import ButtonLogin from '../components/landingPage/ButtonLogin';
import ButtonSignUp from '../components/landingPage/ButtonSignUp';
// import ButtonWorkout from '../components/landingPage/ButtonWorkout'
import Icon from 'react-native-vector-icons/FontAwesome';


export default HomeScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,

    });
  }, [navigation]);

  const handlePress = () => {
    Alert.alert('FitFusion', 'FitFusion is a fitness app that provides a variety of workout classes for all levels. Our goal is to help you achieve your fitness goals and live a healthier life.');
  };

  return (
    <View style={styles.container}>
      <VideoBackGround />
      <Title />
      <View style={styles.buttonContainer}>
        <ButtonLogin navigation={navigation} />
        <ButtonSignUp navigation={navigation} />
        {/* <ButtonWorkout navigation={navigation} /> */}
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Learn more about us</Text>
      </TouchableOpacity>
      <Icon name="heart" size={20} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    // marginBottom: 20,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    
    
  },
});
