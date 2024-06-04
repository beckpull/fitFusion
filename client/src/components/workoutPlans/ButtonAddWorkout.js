import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonAddWorkout = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name="plus" size={30} color="grey" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    // backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    right: 20,
    
  },
});

export default ButtonAddWorkout;
