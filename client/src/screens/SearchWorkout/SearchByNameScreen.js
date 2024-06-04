import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { WorkoutContext } from '../../context/WorkoutContext';
import WorkoutsJSON from '../../components/searchResults/WorkoutsJSON';
import Workouts from '../../components/searchResults/ExerciseResults';


export default function SearchByNameScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currentWorkoutId } = useContext(WorkoutContext);
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        console.log('Searching for:', query);


        setLoading(true);


        const lowercasedQuery = query.toLowerCase();

        // Filter local JSON data
        const filteredExercises = WorkoutsJSON.filter(exercise =>
            exercise.name.toLowerCase().includes(lowercasedQuery)
        );

        setExercise(filteredExercises);
        setLoading(false);
    };

const handleAddWorkout = async (exercise) => {
    console.log(`The current ID is ${currentWorkoutId}`)
    try {
        const { data } = await addWorkout({
            variables: {
                workoutPlanId: currentWorkoutId,
                workoutInput: {
                    name: exercise.name,
                    workoutId: Number(exercise.id),
                    bodyPart: exercise.bodyPart,
                    equipment: exercise.equipment,
                    gifUrl: exercise.gifUrl,
                    target: exercise.target,
                    instructions: exercise.instructions.join(', '),
                    secondary: exercise.secondaryMuscles.join(', '),
                }
            }
        });
        Alert.alert('Success', 'Exercise added to workout plan');
    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to add exercise to workout plan');
    }
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>Search for an exercise name:</Text>
        <View style={styles.search}>
            <SearchBar
                placeholder="Search..."
                onChangeText={handleSearch}
                value={searchQuery}
                platform="default"
            />

            {loading ? (
                <Text style={styles.message}>Loading...</Text>
            ) : (

                <ScrollView>
                    <View style={styles.container}>
                        <Workouts workouts={exercise} onAdd={handleAddWorkout} />
                    </View>
                </ScrollView>

            )}
        </View>
    </View>
);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    title: {
        lineHeight: 40,
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    search: {
        width: '90%',
        padding: 16,

    },

    message: {
        marginTop: 20,
        fontSize: 18,
        color: 'green',
    },
});
