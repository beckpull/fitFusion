import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import ButtonRemovePlan from './ButtonRemovePlan';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { REMOVE_WORKOUT_PLAN } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';


const UserPlan = ({ planId, name, workouts }) => {
  const [removeWorkoutPlan, { error }] = useMutation(REMOVE_WORKOUT_PLAN, {
    refetchQueries: [{ query: GET_ME }]
  });

  const navigation = useNavigation();

  const handlePress = () => {
     navigation.navigate('EachPlan', { planId });
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Workout Plan",
      `Are you sure you want to delete the ${name} workout plan?`,
      [
        {
          text: "No",
          onPress: () => console.log("Deletion cancelled by user."),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: async () => {
            console.log(`The current ID is ${planId}`);
            try {
              await removeWorkoutPlan({
                variables: { workoutPlanId: planId },
              });
            } catch (error) {
              console.error(error);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <ButtonRemovePlan onPress={handleDelete} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.exercises}>{workouts.length} Workouts</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exercises: {
    marginTop: 10,
    fontSize: 14,
    color: '#777',
  },
});

export default UserPlan;
