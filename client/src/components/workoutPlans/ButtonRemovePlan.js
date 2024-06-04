import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonRemovePlan = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name="trash" size={20} color="grey" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default ButtonRemovePlan;
