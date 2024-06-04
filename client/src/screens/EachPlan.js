import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, UPDATE_WORKOUT_PLAN_NAME } from '../utils/queries';  // Ensure you import the mutation here
import ExerciseForm from '../components/workoutPlans/ExerciseForm';
import ExerciseCompletionForm from '../components/workoutPlans/ExerciseCompletionForm';
import ButtonAddWorkout from '../components/workoutPlans/ButtonAddWorkout';

const EachPlan = ({ navigation }) => {
  const [isGoalFormVisible, setIsGoalFormVisible] = useState(false);
  const [isCompletionFormVisible, setIsCompletionFormVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentPlanId, setCurrentPlanId] = useState(null); 
  const { loading, error, data, refetch } = useQuery(GET_ME);
  const [updateWorkoutPlanName] = useMutation(UPDATE_WORKOUT_PLAN_NAME);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans } } = data;

  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise);
    navigation.navigate('ExerciseDetail', { exercise });
  };

  const handleComplete = (exercise, planId) => {
    setCurrentExercise(exercise);
    setIsCompletionFormVisible(true);
    setCurrentPlanId(planId);
  };

  const handleSetGoal = (exercise, planId) => {
    setCurrentExercise(exercise);
    setIsGoalFormVisible(true);
    setCurrentPlanId(planId);
  };

  const handleGoalFormSave = (data) => {
    setIsGoalFormVisible(false);
  };

  const handleCompletionFormSave = (data) => {
    setIsCompletionFormVisible(false);
  };

  const handleUpdatePlanName = (planId, newName) => {
    updateWorkoutPlanName({ variables: { planId, newName } })
      .then(() => refetch())
      .catch(err => console.error(err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Workouts:</Text>
        {workoutPlans.map((plan) => (
          <View key={plan._id} style={styles.workoutContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{plan.name}</Text>
              <TouchableOpacity onPress={() => handleUpdatePlanName(plan._id, "New Plan Name")} style={styles.iconButton}>
                <Icon name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {plan.workouts.map((workout) => (
              <View key={workout._id} style={styles.workoutBlock}>
                <TouchableOpacity onPress={() => handleExerciseClick(workout)} style={styles.workoutCard}>
                  <Text style={styles.workout}>{workout.name}</Text>
                  <Icon name="angle-right" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => handleComplete(workout, plan._id)} style={styles.completeButton}>
                    <Text style={styles.completeButtonText}>Complete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSetGoal(workout, plan._id)} style={styles.setGoalButton}>
                    <Text style={styles.setGoalButtonText}>Set Goal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}

        {isGoalFormVisible && currentExercise && (
          <ExerciseForm
            visible={isGoalFormVisible}
            onClose={() => setIsGoalFormVisible(false)}
            onSave={handleGoalFormSave}
            exercise={currentExercise}
            workoutPlanId={currentPlanId}  
            workoutId={currentExercise._id} 
          />
        )}

        {isCompletionFormVisible && currentExercise && (
          <ExerciseCompletionForm
            visible={isCompletionFormVisible}
            onClose={() => setIsCompletionFormVisible(false)}
            onSave={handleCompletionFormSave}
            exercise={currentExercise}
            workoutPlanId={currentPlanId}  
            workoutId={currentExercise._id} 
          />
        )}
      </View>
      <ButtonAddWorkout navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
