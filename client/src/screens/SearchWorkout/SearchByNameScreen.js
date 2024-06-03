import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { WorkoutContext } from '../../context/WorkoutContext';

import Workouts from '../../components/searchResults/ExerciseResults';


export default function SearchByNameScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [exercise, setexercise] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currentWorkoutId } = useContext(WorkoutContext);
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        console.log('Searching for:', query);

        // API Results for searchQuery
        setLoading(true);
        const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery.toLowerCase()}`;
        try {
            const response = await axios.get(url, {
                params: { limit: '50' },
                headers: {
                    'X-RapidAPI-Key': '1bc24f2cf3msh0169303f2df7b55p108af6jsn0e1789b7d77c',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                },
            });

            setexercise(response.data);
        } catch (error) {
            // console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddWorkout = async (exercise) => {
       console.log(`The current ID is ${currentWorkoutId}`)
        try {
            const { data } = await addWorkout({
                variables: {
                    workoutPlanId: currentWorkoutId,
                    workoutInput: {
                        name: exercise.name,
                        workoutId: exercise.id,
                        bodyPart: exercise.bodyPart,
                        equipment: exercise.equipment,
                        gifUrl: exercise.gifUrl,
                        target: exercise.target,
                        instructions: exercise.instructions,
                        secondary: exercise.secondaryMuscles, 
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
                            <Workouts workouts={exercise} onAdd={handleAddWorkout}/>
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
