import { React, useEffect } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ButtonRemovePlan({ navigation }) {

    

  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('RemovePlan')}>
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </Pressable>
  )
};

const styles = StyleSheet.create({
    button: {
        width: 10,
        height: 10,
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