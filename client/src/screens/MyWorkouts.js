import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import UserPlan from '../components/workoutPlans/UserPlan';
import ButtonAddPlan from '../components/workoutPlans/ButtonAddPlan';
import '../styles/Workout.css';

const WorkoutPlan = ({ navigation }) => {

  const { loading, error, data } = useQuery(GET_ME);
  console.log(data);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
    });
  }, [navigation]);

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
    { data.workouts ? (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.workouts.map((plan, index) => (
          <UserPlan key={index} name={plan.name} goal={plan.goal} workouts={plan.workouts} />
        ))}
      </ScrollView>
    ) : "" }
      
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


