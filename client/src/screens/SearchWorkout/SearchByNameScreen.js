import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default SearchByNameScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search for an exercise name:</Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    small: {
        fontSize: 20,
    },
});
