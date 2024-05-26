import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../../components/searchWorkoutPages/searchByMuscle/Title';

export default SearchByNameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title/>
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
