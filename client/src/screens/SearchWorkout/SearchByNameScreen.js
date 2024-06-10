import React, { useState, useContext, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { WorkoutContext } from '../../context/WorkoutContext';
import WorkoutsJSON from '../../components/searchResults/WorkoutsJSON';
import Workouts from '../../components/searchResults/ExerciseResults';
import { I18nContext } from '../../../I18n';




export default function SearchByNameScreen() {
    const { i18n } = useContext(I18nContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currentWorkoutId } = useContext(WorkoutContext);
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);
    const navigation = useNavigation();
    useLayoutEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EachPlan', { planId: currentWorkoutId })}>
                    <Ionicons style={styles.arrow} name="arrow-back" size={24} color="black" marginBottom="200"/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

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
        <Text style={styles.title}>{i18n.t('Search for an exercise name')}:</Text>
        <View style={styles.search}>
            <SearchBar
                placeholder={i18n.t('searchPlaceholder')}
                onChangeText={handleSearch}
                value={searchQuery}
                platform="default"
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholderTextColor="#888"
            />

            {loading ? (
                <Text style={styles.message}>{i18n.t('Loading')}...</Text>
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
        width: '100%',
        flex: 1,
        backgroundColor: '#FCF5EF',
        alignItems: 'center',
        justifyContent: 'top',
    },
    title: {
        lineHeight: 40,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 10,
        marginEnd: 10,
    },
    search: {
        width: '100%',
        padding: 16,
        borderRadius: 10,
    },
    searchContainer: {
        backgroundColor: '#34344c',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 10,
        padding: 12,
    },
    inputContainer: {
        backgroundColor: 'rgba(255, 255, 255)',
        borderRadius: 10,
    },
    input: {
        color: 'white',
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: 'green',
    },
    arrow: {
        marginLeft: 20,
    },
});
