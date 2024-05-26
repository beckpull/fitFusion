import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonSearchExercise({ navigation }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('#')}>
      <Text style={styles.buttonText}>Name</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 90,
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
});