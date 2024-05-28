import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import UserPlan from '../components/workoutPlans/UserPlan';
import ButtonAddPlan from '../components/workoutPlans/ButtonAddPlan';
import '../styles/Workout.css';

export const data = [
  {
    name: "Leg Day",
    workouts: ["Test", "test1", "test2"]
  },
  {
    name: "Arm Day",
    workouts: ["Test", "test1", "test2", "test3"]
  },
  {
    name: "Cardio Day",
    workouts: ["Test", "test1", "test2", "test3", "test4"]
  },
  {
    name: "Core Day",
    workouts: ["Test", "test1", "test2", "test3", "test4", "test5"]
  }
];

const WorkoutPlan = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((plan, index) => (
          <UserPlan key={index} name={plan.name} workouts={plan.workouts} navigation={navigation} />
        ))}
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
    marginTop: 100, 
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 80,
  },
});

export default WorkoutPlan;
