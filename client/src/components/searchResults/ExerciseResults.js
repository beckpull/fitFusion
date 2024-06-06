import { useState, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ExerciseModal from './ExerciseModal';
import { WorkoutContext } from '../../context/WorkoutContext';



export default function Workouts(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const workouts = props.workouts || [];
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const { currentWorkoutId } = useContext(WorkoutContext);

  const handleOpenModal = (workout) => {
    setSelectedWorkout(workout);
    setModalVisible(true);
  };

  return (
    <>
      {workouts.map((workout) => (
        <View key={workout.id} style={styles.container}>



          <Text style={styles.text}>{workout.name}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => handleOpenModal(workout)}>
              <Text>Description</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => props.onAdd(workout)}>
              <Text>Add</Text>
            </Pressable>

            <ExerciseModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              workout={selectedWorkout} />

          </View>
        </View>
      ))}
    </>
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
    backgroundColor: '#3e3e5b',
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    padding: 5,
    paddingRight: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    right: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    width: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 5,
  },
});
