import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonRemovePlan from './ButtonRemovePlan';
import { useNavigation } from '@react-navigation/native';

const UserPlan = ({ name, goal, workouts, _id }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EachPlan', { name, goal, workouts, _id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <ButtonRemovePlan />
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
