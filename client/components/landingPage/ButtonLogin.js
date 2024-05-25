import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonLogin({ navigation }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('LoginForm')}>
      <Text style={styles.buttonText}>Login</Text>
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
});