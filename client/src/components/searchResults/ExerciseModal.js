import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Image } from 'react-native';

export default ExerciseModal = ({ modalVisible, setModalVisible, workout }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {workout ? (
            <>
              <Text style={styles.title}>{workout.name}</Text>
              <Image style={{ width: 200, height: 200 }} source={{ uri: workout.gifUrl }} />
              <Text style={styles.instructions}>{workout.instructions}</Text>
            </>
          ) : (
            <Text>No workout selected</Text>
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

