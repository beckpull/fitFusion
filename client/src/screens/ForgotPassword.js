import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from '../utils/auth'; // Assuming you have a function to send reset emails
import { I18nContext } from '../../App';

export default function ForgotPassword() {
  const { i18n } = useContext(I18nContext);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const goToLoginForm = () => {
    // Navigate back to the login form
    navigation.navigate('LoginForm');
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert(i18n.t('Error'), i18n.t('Please enter your email address'));
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
      <Text style={styles.title}>{i18n.t('Forgot Password')}?</Text>
      <Text style={styles.subtitle}>{i18n.t('resetPassword')}.</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder={i18n.t("Enter your email")}
        keyboardType="email-address"
      />
      <Pressable style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>{i18n.t('Reset Password')}</Text>
      </Pressable>
      <Pressable onPress={goToLoginForm}>
        <Text style={styles.goBackLink}>← {i18n.t('Go back to login')}</Text>
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
