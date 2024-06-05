import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { StyleSheet, View, Text } from "react-native";
import Colors from '../../styles/colors';
import { Calendar } from 'react-native-calendars';

export default function CalendarProgress() {
  
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  

  console.log("Workouts data: ", data);

  const workoutData = data.me.workoutPlans.reduce((acc, plan) => {
    acc[plan.date] = { selected: true, marked: true, selectedColor: Colors.calendarCheck, dotColor: 'white' };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={workoutData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
});