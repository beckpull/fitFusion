import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { ADD_WORKOUT_PLAN } from '../utils/mutations';
import { WorkoutContext } from '../context/WorkoutContext';
import { I18nContext } from '../../App';


export default function NewWorkoutForm() {
    const { i18n } = useContext(I18nContext);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const { setCurrentWorkoutId } = useContext(WorkoutContext);

    const [addWorkoutPlan, { error, data }] = useMutation(ADD_WORKOUT_PLAN);

    const navigation = useNavigation();

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!name || !goal) {
            Alert.alert('Error', 'All fields are required');
            return;

        };

        setName('');
        setGoal('');
        try {
            const { data } = await addWorkoutPlan({
                variables: { name, goal, },
            });
  
            Alert.alert('Workout Plan Added!', 'Next, add exercises to your workout plan!');
    
            setName('');
            setGoal('');
            setCurrentWorkoutId(data.addWorkoutPlan._id);
            navigation.navigate('SearchByNameScreen');

        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to add workout plan');
        }

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <View style={styles.container}>
                    <Text style={styles.h1}>{i18n.t('Create a New Workout Plan')}</Text>
                    <Text style={styles.label}>{i18n.t('Workout Plan Name')}:</Text>

                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder={i18n.t("Example: 5K Training Plan")}
                    />
                    <Text style={styles.label}>{i18n.t('Goal')}:</Text>

                    <TextInput
                        style={styles.input}
                        value={goal}
                        onChangeText={setGoal}
                        placeholder={i18n.t("Example: Run a 5K in under 30 minutes")}
                    />

                </View>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>{i18n.t('Create Workout Plan')}</Text>
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
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    success: {
        color: 'green',
        marginTop: 10,
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
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },

});


