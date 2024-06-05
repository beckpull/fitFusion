import { React, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import VideoBackGround from '../components/landingPage/VideoBackGround';
import Title from '../components/landingPage/Title';
import ButtonLogin from '../components/landingPage/ButtonLogin';
import ButtonSignUp from '../components/landingPage/ButtonSignUp';
// import ButtonWorkout from '../components/landingPage/ButtonWorkout'
import Icon from 'react-native-vector-icons/FontAwesome';
import AboutUs from './AboutUs';
import LanguagesToggle from '../components/tabBar/LanguagesToggle';
import { I18nContext } from '../../App';


export default HomeScreen = ({ navigation }) => {

  const { i18n } = useContext(I18nContext);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,

    });
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate('AboutUs');
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
      <Pressable onPress={handlePress}>
        <Text style={styles.link}>{i18n.t('Learn more about us')}</Text>
      </Pressable>
      <Icon name="heart" size={20} color="#fff" />
      <View style={styles.toggle}>
        <LanguagesToggle />
      </View>

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
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,


  },
  toggle: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
