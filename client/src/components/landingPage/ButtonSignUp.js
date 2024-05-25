import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonSignUp({ navigation }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('SignUpForm')}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
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
});