import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from '../utils/auth'; // Assuming you have a function to send reset emails

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const goToLoginForm = () => {
    // Navigate back to the login form
    navigation.navigate('LoginForm');
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      await sendPasswordResetEmail(email);
      Alert.alert('Success', 'An email with instructions to reset your password has been sent.');
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      Alert.alert('Error', 'Failed to send password reset email. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Forgot password form */}
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Enter your email address below to receive instructions on how to reset your password.</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Pressable style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>
      <Pressable onPress={goToLoginForm}>
        <Text style={styles.goBackLink}>← Go back to login</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#003566',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  goBackLink: {
    color: 'blue',
    marginTop: 20,
  },
});
