import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonRemovePlan = ({ navigation }) => {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('RemovePlan')}>
      <Icon name="close" size={20} color="#fff" />
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default ButtonRemovePlan;
