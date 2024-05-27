import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";
import icon from "../assets/FitFusionLogoType.png";
import { useNavigation } from '@react-navigation/native';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    Alert.alert('Form submitted', `Email: ${email}, Password: ${password}`);
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{ width: 150, height: 80 }}
      />
      <Text style={styles.h1}>Live the experience!</Text>
      <Text style={{ ...styles.label, marginTop: 100 }}>Name</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
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
    backgroundColor: 'blue',
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