import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_WORKOUT } from '../utils/mutations';
import ExerciseForm from '../components/workoutPlans/ExerciseForm';
import ExerciseCompletionForm from '../components/workoutPlans/ExerciseCompletionForm';
import ButtonAddWorkout from '../components/workoutPlans/ButtonAddWorkout';
import ButtonRemoveExercise from '../components/workoutPlans/ButtonRemoveExercise';

import { WorkoutContext } from '../context/WorkoutContext';

const EachPlan = ({ navigation, route }) => {
  const { planId } = route.params;
  const [isGoalFormVisible, setIsGoalFormVisible] = useState(false);
  const [isCompletionFormVisible, setIsCompletionFormVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const { loading, error, data, refetch } = useQuery(GET_ME);
  const [isEditing, setIsEditing] = useState(false);
  const { setCurrentWorkoutId } = useContext(WorkoutContext);
  const [removeWorkout] = useMutation(REMOVE_WORKOUT);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans } } = data;
  const currentPlan = workoutPlans.find(plan => plan._id === planId);

  if (!currentPlan) {
    return <Text>Workout Plan not found</Text>;
  }

  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise);
    navigation.navigate('ExerciseDetail', { exercise });
  };

  const handleComplete = (exercise) => {
    setCurrentExercise(exercise);
    setIsCompletionFormVisible(true);
  };

  const handleSetGoal = (exercise) => {
    setCurrentExercise(exercise);
    setIsGoalFormVisible(true);
  };

  const handleGoalFormSave = (data) => {
    setIsGoalFormVisible(false);
  };

  const handleCompletionFormSave = (data) => {
    setIsCompletionFormVisible(false);
  };

  const handleAdd = () => {
    setCurrentWorkoutId(planId);
    navigation.navigate('SearchByNameScreen');
  };

  const handleRemove = async (workoutPlanName, exerciseName, exerciseId) => {
    console.log(workoutPlanName)
    Alert.alert(
      "Delete exercise from workout plan",
      `Are you sure you want to delete ${exerciseName} from the ${workoutPlanName} workout plan?`,
      [
        {
          text: "No",
          onPress: () => console.log("Deletion cancelled by user."),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: async () => {

            try {
              const { data } = await removeWorkout({
                variables: { workoutPlanId: planId, workoutId: exerciseId },
              });
              refetch();
            } catch (error) {
              console.error(error);
              Alert.alert('Error', 'Failed to remove exercise from workout plan');
            }
          }
        }
      ],
      { cancelable: false }
    );


  };

  const handleRename = () => {
    console.log("CLICKED EDIT")
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={isEditing ? handleSave : handleRename}
          style={styles.iconButton}>
          <Icon name={isEditing ? "save" : "edit"} size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{currentPlan.name}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Workout Goal: </Text>

          <Text style={styles.workoutBlock}>{currentPlan.goal}</Text>

        </View>

        <Text style={styles.subtitle}>Workouts:</Text>
        {currentPlan.workouts.map((workout) => (
          <View key={workout._id} style={styles.workoutContainer}>
            <View style={styles.workoutBlock}>
              <TouchableOpacity onPress={() => handleExerciseClick(workout)} style={styles.workoutCard}>
                <Text style={styles.workout}>{workout.name}</Text>
                <ButtonRemoveExercise onPress={() => handleRemove(currentPlan.name, workout.name, workout._id)} />
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleComplete(workout)} style={styles.completeButton}>
                  <Text style={styles.completeButtonText}>Complete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSetGoal(workout)} style={styles.setGoalButton}>
                  <Text style={styles.setGoalButtonText}>Set Goal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {isGoalFormVisible && currentExercise && (
          <ExerciseForm
            visible={isGoalFormVisible}
            onClose={() => setIsGoalFormVisible(false)}
            onSave={handleGoalFormSave}
            exercise={currentExercise}
            workoutPlanId={planId}
            workoutId={currentExercise._id}
          />
        )}

        {isCompletionFormVisible && currentExercise && (
          <ExerciseCompletionForm
            visible={isCompletionFormVisible}
            onClose={() => setIsCompletionFormVisible(false)}
            onSave={handleCompletionFormSave}
            exercise={currentExercise}
            workoutPlanId={planId}
            workoutId={currentExercise._id}
          />
        )}
      </View>
      <ButtonAddWorkout onPress={handleAdd} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
  workoutContainer: {
    width: '100%',
    marginBottom: 20,
  },
  workoutBlock: {
    marginBottom: 20,
    alignItems: 'center',
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    width: '100%',
    borderRadius: 10,
  },
  workout: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
  },
  completeButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  setGoalButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    flex: 1,
  },
  setGoalButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EachPlan;
