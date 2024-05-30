import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonSignUp({ navigation }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('WorkoutPlan')}>
      <Text style={styles.buttonText}>Workouts</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
      },
})