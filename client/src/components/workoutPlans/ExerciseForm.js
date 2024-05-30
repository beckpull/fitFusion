import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ExerciseForm = ({ visible, onClose, onSave, exercise }) => {
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [measurementType, setMeasurementType] = useState('setsRepsWeight');

  const handleSave = () => {
    const data = {
      sets: measurementType === 'setsRepsWeight' ? sets : null,
      reps: measurementType === 'setsRepsWeight' ? reps : null,
      weight: measurementType === 'setsRepsWeight' ? weight : null,
      duration: measurementType === 'durationDistance' ? duration : null,
      distance: measurementType === 'durationDistance' ? distance : null,
    };
    onSave(data);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Input Your Exercise Goal</Text>
          <Text style={styles.exerciseName}>Exercise: {exercise.name}</Text>
          <Text style={styles.exerciseEquipment}>Equipment: {exercise.equipment}</Text>
          <Picker
            selectedValue={measurementType}
            onValueChange={(itemValue) => setMeasurementType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Sets, Reps, Weight" value="setsRepsWeight" />
            <Picker.Item label="Duration, Distance" value="durationDistance" />
          </Picker>
          {measurementType === 'setsRepsWeight' && (
            <>
              <TextInput
                placeholder="Sets"
                value={sets}
                onChangeText={setSets}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Reps"
                value={reps}
                onChangeText={setReps}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Weight"
                value={weight}
                onChangeText={setWeight}
                style={styles.input}
                keyboardType="numeric"
              />
            </>
          )}
          {measurementType === 'durationDistance' && (
            <>
              <TextInput
                placeholder="Duration"
                value={duration}
                onChangeText={setDuration}
                style={styles.input}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Distance"
                value={distance}
                onChangeText={setDistance}
                style={styles.input}
                keyboardType="numeric"
              />
            </>
          )}
          <Button title="Back" onPress={onClose} />
          <Button title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseEquipment: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  picker: {
    marginVertical: 10,
  },
});

export default ExerciseForm;
