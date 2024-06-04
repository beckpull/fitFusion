import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { StyleSheet, View, Text } from "react-native";
import Colors from '../../styles/colors';
import { Calendar } from 'react-native-calendars';

// const workoutData = {
//   '2024-06-10': { selected: true, marked: true, selectedColor: 'green' },
//   '2024-06-15': { selected: true, marked: true, selectedColor: 'red' },
// };

export default function CalendarProgress() {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  
  const workoutData = data.me.workoutPlans.reduce((acc, plan) => {
    acc[plan.date] = { selected: true, marked: true, selectedColor: 'blue', dotColor: 'white' };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar Progress</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});