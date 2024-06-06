import { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import icon from "../assets/FitFusionLogoType.png";
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { I18nContext } from "../../I18n";

export default function LoginForm() {
  const { i18n } = useContext(I18nContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [showAlert, setShowAlert] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigation = useNavigation();

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Check if any field is empty
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
  
    try {
      console.log("Attempting login...");
      const { data } = await login({
        variables: { email, password },
      });
  
  
      if (error) {
        console.error('Server error:', error);
        setShowAlert(true);
        return;
      }
  
      Auth.login(data.login.token);
      console.log("Login successful!");
      navigation.navigate('TabBar');
    } catch (err) {
      console.error('something happened!!', err.message);
      // Check if authentication error
      if (err.message.toLowerCase().includes('authenticate')) {
        Alert.alert('Error', 'Incorrect email or password.');
      } else {
        setShowAlert(true);
      }
    }
  };
  
  

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          source={icon}
          style={{ width: 120, height: 80 }}
        />
        <Text style={styles.h1}>{i18n.t('Live the experience')}!</Text>
        <Text style={{ ...styles.label, marginTop: 50 }}>{i18n.t('Email')}</Text>
        <TextInput
          id='email'
          style={[styles.input, !isEmailValid && styles.inputError]}
          name="email"
          value={email}
          onChangeText={setEmail}
          placeholder={i18n.t("Enter your email address")}
          onBlur={() => setIsEmailValid(email.trim() !== '')}
        />
        {!isEmailValid && <Text style={styles.errorText}>Email is required.</Text>}
        <Text style={styles.label}>{i18n.t('Password')}</Text>
        <TextInput
          style={[styles.input, !isPasswordValid && styles.inputError]}
          name="password"
          value={password}
          onChangeText={setPassword}
          placeholder={i18n.t("Enter your password")}
          secureTextEntry={true}
          onBlur={() => setIsPasswordValid(password.trim() !== '')}
        />
        {!isPasswordValid && <Text style={styles.errorText}>{i18n.t("Password is required")}.</Text>}
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{i18n.t('Login')}</Text>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>{i18n.t('I forgot my password')}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{i18n.t('Not a user')}?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpForm')}>
          <Text style={styles.link}>{i18n.t('Create account')}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#003566',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 15,
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
  },
});
