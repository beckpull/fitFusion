import { React, useEffect } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function ButtonAddPlan({ navigation }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('AddPlan')}>
      <FontAwesomeIcon icon="fa-solid fa-plus" />
    </Pressable>
  )
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
      },
});