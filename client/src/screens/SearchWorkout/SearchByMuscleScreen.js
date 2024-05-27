import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Prototype from '../../components/ExerciseResults';
import prototypeObject from '../../components/prototypeObject';

export default SearchByNameScreen = () => {
    return (
        <View style={styles.container}>
            <Prototype  prototypeObject={prototypeObject}/>

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
    title: {
        lineHeight: 40,
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    small: {
        fontSize: 20,
    },
});
