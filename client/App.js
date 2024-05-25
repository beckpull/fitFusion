import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VideoBackGround from './components/landingPage/VideoBackGround';
import ButtonsContainer from './components/landingPage/ButtonsContainer';
import Title from './components/landingPage/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <VideoBackGround />
      <Title />
      <ButtonsContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});