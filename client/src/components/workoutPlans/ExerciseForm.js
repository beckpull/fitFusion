import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMutation } from '@apollo/client';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { I18nContext } from '../../../I18n';
import { ADD_WORKOUT_GOAL } from '../../utils/mutations';

const ExerciseForm = ({ visible, onClose, onSave, exercise, workoutPlanId, workoutId }) => {
  const { i18n } = useContext(I18nContext);
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [measurementType, setMeasurementType] = useState('setsRepsWeight');

  // console.log("workoutPlanId ", workoutPlanId);
  // console.log("workoutId ", workoutId);

  const [saveGoal, { loading, error }] = useMutation(ADD_WORKOUT_GOAL);


  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  const handleSave = async () => {
    const input = {
      sets: measurementType === 'setsRepsWeight' ? sets : null,
      reps: measurementType === 'setsRepsWeight' ? reps : null,
      weight: measurementType === 'setsRepsWeight' ? weight : null,
      duration: measurementType === 'durationDistance' ? duration : null,
      distance: measurementType === 'durationDistance' ? distance : null,
    };

    const variables = {
      workoutPlanId: workoutPlanId,
      workoutId: workoutId,
      goalInput: {
        sets: parseInt(sets),
        reps: parseInt(reps),
        weight: parseInt(weight),
        duration: parseInt(duration),
        distance: parseInt(distance),
        isComplete: false
      }
    }

    // console.log(variables);

    try {
      const { data } = await saveGoal({
        variables: { ...variables }
      });
      // console.log(data);
      onSave(input);
      onClose();
    } catch (err) {
      console.error('Error saving progress', err);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>{i18n.t('Input Your Exercise Goal')}</Text>
            <Text style={styles.exerciseName}>{i18n.t('Exercise')}: </Text>
            <Text style={styles.description}>{exercise.name}</Text>
            <Text style={styles.exerciseName}>{i18n.t('Equipment')}: </Text>
            <Text style={styles.description}>{exercise.equipment} </Text>
            <Picker
              selectedValue={measurementType}
              onValueChange={(itemValue) => setMeasurementType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label={`${i18n.t('Sets')}, ${i18n.t('Reps')}, ${i18n.t('Weight')}`} value="setsRepsWeight" />
              <Picker.Item label={`${i18n.t('Duration')}, ${i18n.t('Distance')}`} value="durationDistance" />
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

            <TouchableOpacity style={styles.buttonContainer} onPress={onClose}>
              <Text style={styles.buttonText}>{`⬅︎ ${i18n.t('back')}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSave}>
              <Text style={styles.buttonText}>{` ${i18n.t('save')} ✓`}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  description: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  picker: {
    marginVertical: 5,
  },
  buttonContainer: {
    backgroundColor: '#f3b9ab',
    fontSize: 14,
    marginTop: 10,
    padding: 8,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText :{
    color: '#003285',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ExerciseForm;
