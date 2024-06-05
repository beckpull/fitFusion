import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert, Keyboard, Switch, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../styles/colors';
import TabBar from "../components/tabBar/TabBar";
import { useMutation } from "@apollo/client";
import { ADD_USER_SECOND_SCREEN } from "../utils/mutations";
import Auth from "../utils/auth";
import { I18nContext } from "../../App";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function PhysicalTest({ route }) {
  const { i18n } = useContext(I18nContext);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('null');
  const [level, setLevel] = useState('null');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: i18n.t('beginner'), value: 'Begginner' },
    { label: i18n.t('intermediate'), value: 'Intermediate' },
    { label: i18n.t('advanced'), value: 'Advanced' }
  ]);

  const [calories, setCalories] = useState('');
  const [isCalorieGoalEnabled, setIsCalorieGoalEnabled] = useState(false);
  const [addUserSecondScreen, { error, data }] = useMutation(ADD_USER_SECOND_SCREEN);
  const navigation = useNavigation();
  const goToLoginForm = () => {
    navigation.navigate('LoginForm');
  };

  const getHeightInInches = () => {
    const feetToInches = parseInt(feet) * 12;
    // console.log(feetToInches);

    const inchesValue = parseInt(inches);
    // console.log(inchesValue);

    const heightValue = feetToInches + inchesValue;
    // console.log(heightValue);

    setHeight(heightValue);
    console.log(height);
  }

  useEffect(() => {
    getHeightInInches();
  }, [feet, inches, getHeightInInches]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (!height || !weight || gender === 'null' || level === 'null'|| (isCalorieGoalEnabled && !calories)) {
      Alert.alert(i18n.t('Error'), i18n.t('All fields are required'));

      return;
    }
    if (isCalorieGoalEnabled && !calories) {
      Alert.alert(i18n.t('Error'), i18n.t('Calories field is required if setting a calorie goal'));
      return;
    }

    Alert.alert('Form submitted', `Height: ${height}, Weight: ${weight}, Gender: ${gender}, Level: ${level}, Calories: ${calories}`);

    try {
      const { data } = await addUserSecondScreen({
        variables: {
          id: route.params.userId,
          height: parseInt(height),
          weight: parseInt(weight),
          gender,
          level,
          calories: isCalorieGoalEnabled ? parseInt(calories) : null,
        },
      });

      if (data) {
        Auth.login(data.addUserSecondScreen.token);
        navigation.navigate('TabBar');

      } 
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }, [height, weight, gender, level, isCalorieGoalEnabled, calories, addUserSecondScreen, route.params.userId, navigation]);

  


  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>

        <Text style={styles.h1}>{i18n.t('Physical Test')}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>{i18n.t('Height')}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'left' }}>
            <TextInput
              style={styles.input}
              value={feet}
              onChangeText={(value) => {
               setFeet(value);
              }}
              keyboardType="decimal-pad"
              placeholder={i18n.t("feet")}
            />

            <TextInput
              style={styles.input}
              value={inches}
              onChangeText={(value) => {
                setInches(value);
              }}
              keyboardType="decimal-pad"
              placeholder="in."

            />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>{i18n.t('Weight')}</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              keyboardType="decimal-pad"
              placeholder={i18n.t("Enter weight in pounds")}
            />
          </View>
        </View>

        <Text style={styles.label}>{i18n.t('Gender')}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.buttonGender, gender === 'Male' ? styles.selectedButton : null]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.buttonText}>{i18n.t('Male')}</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonGender, gender === 'Female' ? styles.selectedButton : null]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.buttonText}>{i18n.t('Female')}</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonGender, gender === 'Non-binary' ? styles.selectedButton : null]}
            onPress={() => setGender('Non-binary')}
          >
            <Text style={styles.buttonText}>{i18n.t('Non-Binary')}</Text>
          </Pressable>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: colors.primaryVariant }}
            thumbColor={isCalorieGoalEnabled ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsCalorieGoalEnabled}
            value={isCalorieGoalEnabled}
          />
          <Text style={styles.switchLabel}>{i18n.t('Set a Calorie Goal')}</Text>
        </View>

        {isCalorieGoalEnabled && (
          <View>
            <Text style={styles.label}>{i18n.t('Calories')}</Text>
            <TextInput
              style={styles.input}
              value={calories}
              onChangeText={setCalories}
              keyboardType="numeric"
              placeholder={i18n.t("Enter your calorie goal")}
            />
          </View>
        )}

        <Text style={styles.label}>{i18n.t('Level')}</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            items={items}
            placeholder={i18n.t("Select your level")}
            open={open}
            value={level}
            setOpen={setOpen}
            setValue={setLevel}
            setItems={setItems}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            containerStyle={open ? { marginBottom: 200 } : {}}
            modal={true}
            onChangeItem={item => {
              setLevel(item.value);
              console.log('onChangeItem triggered');
              console.log('selected item:', level);
            }}
            onOpen={() => {
              console.log('onOpen triggered');
            }}
          />
        </View>


        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{i18n.t('Create Account')}</Text>
        </Pressable>
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
    backgroundColor: colors.secondaryVariant,
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
    backgroundColor: colors.secondaryVariant,
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
    backgroundColor: colors.primaryVariant,
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

