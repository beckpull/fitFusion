import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import UserPlan from '../components/workoutPlans/UserPlan';
import RecommendedPlan from '../components/workoutPlans/RecommendedPlan';
import ButtonAddPlan from '../components/workoutPlans/ButtonAddPlan';
import { recommendedPlans } from '../components/workoutPlans/recommendedPlanData';
import '../styles/Workout.css';

const WorkoutPlan = ({ navigation }) => {
  const { loading, error, data, refetch } = useQuery(GET_ME);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    // return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans } } = data;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Render user's plans */}
        <Text style={styles.yourPlans}>Your Plans</Text>
        {workoutPlans && workoutPlans.length > 0 ? (
          workoutPlans.map((plan) => (
            <UserPlan key={plan._id} planId={plan._id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
           ))
        ) : <Text style={styles.noPlan}>You don't have any workout plans yet! Here are some recommended plans to get you started - or add one of your own!</Text>}

        {/* Render recommended plans */}
        <Text style={styles.recommendedPlans}>Recommended Plans</Text>
        {recommendedPlans.map((plan) => (
          <RecommendedPlan key={plan.id} planId={plan.id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
        ))}

      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonAddPlan navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  scrollContainer: {
    paddingBottom: 70, // Ensure enough padding at the bottom to avoid the button being covered
    alignItems: 'center',
  },
  recommendedPlans: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  yourPlans: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  noPlan: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10, // Ensure the button stays above other content
  }
});

export default WorkoutPlan;
