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
        {/* Render recommended plans */}
        <Text style={styles.sectionTitle}>Recommended Plans</Text>
        {recommendedPlans.map((plan) => (
          <RecommendedPlan key={plan.id} planId={plan.id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
        ))}

        {/* Render user's plans */}
        <Text style={styles.sectionTitle}>Your Plans</Text>
        {workoutPlans ? (
          workoutPlans.map((plan) => (
            <UserPlan key={plan._id} planId={plan._id} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
           ))
        ) : (
          <Text>No workout plans available. Add one below!</Text>
        )}
      </ScrollView>
      <ButtonAddPlan navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default WorkoutPlan;
