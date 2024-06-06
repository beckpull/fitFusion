import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_WORKOUT, UPDATE_WORKOUT_GOAL, ADD_WORKOUT_PROGRESS } from '../utils/mutations';
import ExerciseForm from '../components/workoutPlans/ExerciseForm';
import ExerciseCompletionForm from '../components/workoutPlans/ExerciseCompletionForm';
import ButtonAddWorkout from '../components/workoutPlans/ButtonAddWorkout';
import ButtonRemoveExercise from '../components/workoutPlans/ButtonRemoveExercise';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [updateGoal] = useMutation(UPDATE_WORKOUT_GOAL);
  const [saveProgress] = useMutation(ADD_WORKOUT_PROGRESS);
  const [goalComplete, setGoalComplete] = useState(false)

  useEffect(() => {
    refetch();
  }, [refetch]);


  useLayoutEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('MyWorkouts')}>
          <Ionicons style={styles.arrow} name="arrow-back" size={24} color="black" marginBottom="200" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans } } = data;
  const currentPlan = workoutPlans.find(plan => plan._id === planId);
  console.log("This is currentPlan", currentPlan);

  if (!currentPlan) {
    return <Text>Workout Plan not found</Text>;
  }




  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise);
    navigation.navigate('ExerciseDetail', { exercise, planId: currentPlan._id });
  };

  const handleComplete = async (workout, planId) => {
    const goal = workout.goal[0]
    console.log("this is goal:", goal)
    console.log("this is goalId:", goal._id)
    const input = {
      sets: goal.sets,
      reps: goal.reps,
      weight: goal.weight,
      duration: goal.duration,
      distance: goal.distance
    }
    try {
      await updateGoal({
        variables: {
          workoutPlanId: planId,
          workoutId: workout._id,
          goalId: goal._id,
          isComplete: true,
        },
      })

      await saveProgress({
        variables: {
          workoutPlanId: planId,
          workoutId: workout._id,
          progressInput: input,
        }
      })

      setGoalComplete(true);
      Alert.alert('Congratulations!');
    } catch(error) {
      console.error('Error:', error);
    }
    // setCurrentExercise(exercise);
    // setIsCompletionFormVisible(true);
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

  const handleRename = (id, workoutPlanName, workoutPlanGoal) => {
    navigation.navigate('EditWorkoutForm', { id, workoutPlanName, workoutPlanGoal });

  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleRename(currentPlan._id, currentPlan.name, currentPlan.goal)}
          style={styles.iconButton}>
          <Icon name={isEditing ? "save" : "edit"} size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{currentPlan.name}</Text>
          <Text style={styles.subtitle}>Goal: {currentPlan.goal}</Text>
        </View>



        <Text style={styles.subtitle}>Workouts:</Text>
        {currentPlan.workouts.map((workout) => (
          <View key={workout._id} style={styles.workoutContainer}>
            <View style={styles.workoutBlock}>
              <TouchableOpacity onPress={() => handleExerciseClick(workout, currentPlan._id)} style={styles.workoutCard}>
                <Text style={styles.workout}>{workout.name}</Text>
                <ButtonRemoveExercise onPress={() => handleRemove(currentPlan.name, workout.name, workout._id)} />
              </TouchableOpacity>
              {workout.goal && workout.goal.length > 0 ? (
                workout.goal.map((goal) => (
                  <>
                  {goalComplete === false ? (
                    <>
                    <TouchableOpacity onPress={() => handleExerciseClick(workout)} style={styles.workoutCard}>
                      {goal.sets !== null && goal.reps !== null && goal.weight !== null ?(
                      <Text style={styles.workout}>Sets: {goal.sets} Reps: {goal.reps} Weight: {goal.weight}</Text>
                    ) : (
                      <Text style={styles.workout}>Duration: {goal.duration} Distance: {goal.distance}</Text>
                    )}
                        {/* <ButtonRemoveExercise onPress={() => handleRemove(currentPlan.name, workout.name, workout._id)} /> */}
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => handleComplete(workout, planId)} style={styles.completeButton}>
                      <Text style={styles.completeButtonText}>Complete</Text>
                    </TouchableOpacity>
                    </View>
                    </>
                    ) : (
                      <Text style={styles.subtitle}>Completed</Text>
                    )}
                  </>
                ))
              ) : (
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleSetGoal(workout, planId)} style={styles.setGoalButton}>
                  <Text style={styles.setGoalButtonText}>Set Goal</Text>
                </TouchableOpacity>
              </View>
              )}
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    // flex: 1,
    alignItems: 'center',
    // marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  congratulations: {
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
  arrow: {
    marginLeft: 20,
},
});

export default EachPlan;
