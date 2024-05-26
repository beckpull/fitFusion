import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonSearchExercise from '../../components/searchWorkoutPages/main/ButtonSearchExercise';
import ButtonSearchMuscle from '../../components/searchWorkoutPages/main/ButtonSearchMuscle';
import Title from '../../components/searchWorkoutPages/main/Title';




export default SearchWorkoutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.buttonContainer}>
                <ButtonSearchExercise navigation={navigation} />
                <ButtonSearchMuscle navigation={navigation} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 250,
    },
});
