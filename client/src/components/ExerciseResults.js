import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import workouts from './prototypeObject';
import ExerciseModal from './ExerciseModal';

export default function Prototype(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ExerciseModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Text style={styles.text}>{workouts[0].name} </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text>Description</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    padding: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    right: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 5,
  },
});
