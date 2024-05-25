import React from 'react';
import { View, StyleSheet } from 'react-native';
import VideoBackGround from '../components/landingPage/VideoBackGround';
import Title from '../components/landingPage/Title';
import ButtonLogin from '../components/landingPage/ButtonLogin';
import ButtonSignUp from '../components/landingPage/ButtonSignUp';
import { StatusBar } from 'expo-status-bar';

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VideoBackGround />
      <Title />
      <View style={styles.buttonContainer}>
        <ButtonLogin navigation={navigation} />
        <ButtonSignUp navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
});
