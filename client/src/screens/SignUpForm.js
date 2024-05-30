import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [country, setCountry] = useState('USA');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Australia', value: 'Australia' },
    { label: 'Brazil', value: 'Brazil' },
    { label: 'Canada', value: 'Canada' },
    { label: 'China', value: 'China' },
    { label: 'Colombia', value: 'Colombia' },
    { label: 'France', value: 'France' },
    { label: 'Germany', value: 'Germany' },
    { label: 'India', value: 'India' },
    { label: 'Italy', value: 'Italy' },
    { label: 'Japan', value: 'Japan' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'South Africa', value: 'South Africa' },
    { label: 'Spain', value: 'Spain' },
    { label: 'UK', value: 'UK' },
    { label: 'USA', value: 'USA' }
  ]);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const [showDatePicker, setShowDatePicker] = useState(false);
 

  // Email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
  };

  const navigation = useNavigation();
  const goToLoginForm = () => {
    navigation.navigate('LoginForm'); // Replace 'Login' with the name of your Login screen in your navigation stack
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("User Signing up", username, email, password, country, birthDate);
    if (!username || !email || !password || !country || !birthDate) {
      Alert.alert('Error', 'All fields are required');
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setCountry('');
    setBirthDate(new Date());
    try {
      // const variables = { 
      //   username, 
      //   email, 
      //   password, 
      //   country, 
      //   birthDate,
        
      // };
      // console.log("Variables: ", variables);
      const { data } = await addUser({
        variables: { username, email, password, country, birthDate },
      });

      console.log('This is the data: ', data);

      if (error) {
        console.error('Server error:', error);
        return;
      }

      Auth.login(data.addUser.token);
      console.log("User added successfully!");
      navigation.navigate('PhysicalTest');
    } catch (err) {
      console.error('something happened!!', err.message);
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
      <Text style={styles.h1}>Create Account</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput

        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Country</Text>
      <View style={styles.pickerContainer}>
        <DropDownPicker
          items={items}
          placeholder="Select your country"
          open={open}
          value={country}
          setOpen={setOpen}
          setValue={setCountry}
          setItems={setItems}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => {
            setCountry(item.value);
            console.log('onChangeItem triggered');
            console.log('selected item:', item);
          }}
          onOpen={() => {
            console.log('onOpen triggered');
            setShowDatePicker(false); // Close the date picker when the country picker is opened
          }}
        />
      </View>

      <View style={open ? styles.birthDateContainerOpen : styles.birthDateContainerClosed}>
        <Text style={styles.label}>Birth Date</Text>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>{birthDate.toDateString()}</Text>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            style={styles.dateTimePicker}
          />
        )}
      </View>



      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>I am already a user,</Text>
        <Pressable onPress={goToLoginForm}>
          <Text style={styles.loginLink}>Login</Text>
        </Pressable>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  dateText: {
    height: 40,
    lineHeight: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#003566',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  birthDateContainerClosed: {
    marginTop: 0,
  },
  birthDateContainerOpen: {
    marginTop: 200,
  },
  dateTimePicker: {
    borderRadius: 5,
    marginBottom: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 5,
  },
});