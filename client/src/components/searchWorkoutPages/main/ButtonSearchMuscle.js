import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonSearchMuscle({ navigation }) {
    return (
        <Pressable style={styles.button} onPress={() => navigation.navigate('SearchByMuscleScreen')}>
            <Text style={styles.buttonText}>Target Muscle</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 90,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});