import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {

  const navigation = useNavigation();
  const goToLoginForm = () => {
    // Navigate back to the login form
    navigation.navigate('LoginForm');
  };

  return (
    <View style={styles.container}>
      {/* Forgot password form */}
      <Text>Forgot password form</Text>
      <Pressable onPress={goToLoginForm}>
        <Text style={styles.goBackLink}>← Go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackLink: {
    color: 'blue',
    marginTop: 20,
  },
});