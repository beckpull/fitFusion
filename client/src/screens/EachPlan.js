import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExerciseForm from '../components/workoutPlans/ExerciseForm';
import ButtonAddWorkout from '../components/workoutPlans/ButtonAddWorkout';


const EachPlan = ({ route, navigation }) => {
  const { name, workouts, goal } = route.params;
  const [planName, setPlanName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);

  useEffect(() => {
    const checkFirstTimeView = async (exerciseName) => {
      try {
        const firstTime = await AsyncStorage.getItem(`firstTime_${exerciseName}`);
        if (firstTime === null) {
          setIsFormVisible(true);
          await AsyncStorage.setItem(`firstTime_${exerciseName}`, 'false');
        }
      } catch (error) {
        console.error('Failed to check first time view', error);
      }
    };

    if (currentExercise) {
      checkFirstTimeView(currentExercise.name);
    }
  }, [currentExercise]);

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise);
    navigation.navigate('ExerciseDetail', { exercise });
  };

  const handleComplete = (exercise) => {
    setCurrentExercise(exercise);
    setIsFormVisible(true);
  };

  const handleFormSave = (data) => {
    // Save the form data if needed
    setIsFormVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={planName}
              onChangeText={setPlanName}
            />
          ) : (
            <Text style={styles.title}>{planName}</Text>
          )}
          <TouchableOpacity onPress={isEditing ? handleSave : handleRename} style={styles.iconButton}>
            <Icon name={isEditing ? "save" : "edit"} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Goal:</Text>
        <Text style={styles.description}>{goal}</Text>

        <Text style={styles.subtitle}>Workouts:</Text>
        {workouts.map((workout, index) => (
          <View key={index} style={styles.workoutContainer}>
            <TouchableOpacity onPress={() => handleExerciseClick(workout)} style={styles.workoutCard}>
              <Text style={styles.workout}>{workout.name}</Text>
              <Icon name="angle-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleComplete(workout)} style={styles.completeButton}>
              <Text style={styles.completeButtonText}>Complete</Text>
            </TouchableOpacity>
          </View>
        ))}

        {isFormVisible && currentExercise && (
          <ExerciseForm
            visible={isFormVisible}
            onClose={() => setIsFormVisible(false)}
            onSave={handleFormSave}
            exercise={currentExercise}
          />
        )}
      </View>
      <View style={styles.space}></View>
      <ButtonAddWorkout navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  workoutContainer: {
    width: '100%',
    marginBottom: 10,
  },
  workoutCard: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workout: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 10,
  },
  completeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  completeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
  space: {
    height: 70,
  },
});

export default EachPlan;
