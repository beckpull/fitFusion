import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import icon from "../assets/FitFusionLogoType.png";
import { useNavigation } from '@react-navigation/native';
import MyProfile from "./MyProfile";
import TabBar from "../components/tabBar/TabBar";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  
  const navigation = useNavigation();

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ 
  //     ...userFormData, 
  //     [name]: value });
  // }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("user: ", email, password);

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await login({

        variables: { email, password },
      });
      console.log(data);

      Auth.login(data.login.token);
    } catch (err) {
      console.error('something happened!!', err);
      setShowAlert(true);
    }

    // setUserFormData({
    //   email: '',
    //   password: '',
    // });
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
          style={{ width: 150, height: 80 }}
        />
        <Text style={styles.h1}>Live the experience!</Text>
        <Text style={{ ...styles.label, marginTop: 100 }}>Email</Text>
        <TextInput
          id='email'
          style={styles.input}
          name="email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          name="password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>I forgot my password</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Not a user?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpForm')}>
          <Text style={styles.link}>Create account</Text>
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
  },
  container: {
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