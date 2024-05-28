import { React, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default WorkoutPlan = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,

    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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