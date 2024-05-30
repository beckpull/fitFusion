import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert, Keyboard, Switch, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PhysicalTest() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('Lose weight');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Lose Weight', value: 'Lose Weight' },
    { label: 'Gain Muscle', value: 'Gain Muscle' },
    { label: 'Improve Endurance', value: 'Improve Endurance' },
    { label: 'Improve Flexibility', value: 'Improve Flexibility' },
    { label: 'Improve Balance', value: 'Improve Balance' },
    { label: 'Improve Strength', value: 'Improve Strength' },
    { label: 'Improve Overall Health', value: 'Improve Overall Health' },
  ]);

  const [calories, setCalories] = useState('');
  const [isCalorieGoalEnabled, setIsCalorieGoalEnabled] = useState(false);
  
  const navigation = useNavigation();
  const goToLoginForm = () => {
    navigation.navigate('LoginForm');
  };

  const handleSubmit = () => {
    if (!age || !height || !weight || !gender || !goal) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    Alert.alert('Form submitted', `Age: ${age}, Height: ${height}, Weight: ${weight}, Gender: ${gender}, Goal: ${goal}, Calories: ${calories}`);
    navigation.navigate('MyProfile');
  };


  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.h1}>Physical Test</Text>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={(value) => {
            if (value >= 1 && value <= 100 || value === '') {
              setAge(value);
            }
          }}
          keyboardType="numeric"
          placeholder="Enter your age"
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Height</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={(value) => {
                // Convert height from feet to inches
                const heightInInches = value * 12;
                setHeight(heightInInches);
              }}
              keyboardType="decimal-pad"
              placeholder="Enter height in feet"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Weight</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              keyboardType="decimal-pad"
              placeholder="Enter weight in pounds"
            />
          </View>
        </View>

        <Text style={styles.label}>Gender</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.buttonGender, gender === 'Male' ? styles.selectedButton : null]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.buttonText}>Male</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonGender, gender === 'Female' ? styles.selectedButton : null]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.buttonText}>Female</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonGender, gender === 'Non-binary' ? styles.selectedButton : null]}
            onPress={() => setGender('Non-binary')}
          >
            <Text style={styles.buttonText}>Non-Binary</Text>
          </Pressable>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#E76F51" }}
            thumbColor={isCalorieGoalEnabled ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsCalorieGoalEnabled}
            value={isCalorieGoalEnabled}
          />
          <Text style={styles.switchLabel}>Set a Calorie Goal</Text>
        </View>

        {isCalorieGoalEnabled && (
          <View>
            <Text style={styles.label}>Calories</Text>
            <TextInput
              style={styles.input}
              value={calories}
              onChangeText={setCalories}
              keyboardType="numeric"
              placeholder="Enter your calorie goal"
            />
          </View>
        )}

        <Text style={styles.label}>Goals</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            items={items}
            placeholder="Select your goals"
            open={open}
            value={goal}
            setOpen={setOpen}
            setValue={setGoal}
            setItems={setItems}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            containerStyle={open ? { marginBottom: 200 } : {}}
            modal={true}
            onChangeItem={item => {
              setGoal(item.value);
              console.log('onChangeItem triggered');
              console.log('selected item:', goal);
            }}
            onOpen={() => {
              console.log('onOpen triggered');
            }}
          />
        </View>


        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create Account</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonGender: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#003566',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: '#E76F51',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});