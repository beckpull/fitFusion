import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import UserPlan from '../components/workoutPlans/UserPlan';
import ButtonAddPlan from '../components/workoutPlans/ButtonAddPlan';
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
    return <Text>Error: {error.message}</Text>;
  }

  const { me: { workoutPlans } } = data;

  return (
    <View style={styles.container}>
      {workoutPlans ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {workoutPlans.map((plan) => (
            <UserPlan key={plan._id} planId={plan._id} name={plan.name} workouts={plan.workouts} />
          ))}
        </ScrollView>
      ) : (
        <Text>No workout plans available</Text>
      )}
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
    alignItems: 'center',
    paddingBottom: 80,
  },
});

export default WorkoutPlan;
