import React, { useContext } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, Pressable, Image } from 'react-native';
import { I18nContext } from '../../../I18n';

export default ExerciseModal = ({ modalVisible, setModalVisible, workout }) => {
  const { i18n } = useContext(I18nContext);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >

      <View style={styles.centeredView}>
        <ScrollView>
          <View style={styles.modalView}>
            {workout ? (
              <>
                <Text style={styles.title}>{workout.name}</Text>
                <Image style={{ width: 200, height: 200 }} source={{ uri: workout.gifUrl }} />

                <Text style={styles.subtitle}>{i18n.t('Equipment')}:</Text>
                <Text style={styles.description}>{workout.equipment}</Text>
                <Text style={styles.subtitle}>{i18n.t('Body Part')}:</Text>
                <Text style={styles.description}>{workout.bodyPart}</Text>
                <Text style={styles.subtitle}>{i18n.t('Target Muscles')}:</Text>
                <Text style={styles.description}>{workout.target}</Text>
                


                <View style={styles.instructions}>


                  {workout.instructions.map((instruction, index) => (
                    <View key={index} style={styles.instructionItem}>
                      <Text style={styles.instruction}>{index + 1}.  {instruction}</Text>
                    </View>


                  ))}


                </View>
              </>
            ) : (
              <Text>{i18n.t('No workout selected')}</Text>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>{i18n.t('Close')}</Text>
            </Pressable>
          </View>
        </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  instructionItem: {
    marginBottom: 15
  },
});

