import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import videoFile from './assets/videos/mainVideo.mp4'; // replace with your video file path

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={videoFile}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: '100%', height: '100%' }}
      />
      <Text style={styles.title}>FitFusion</Text>
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
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
