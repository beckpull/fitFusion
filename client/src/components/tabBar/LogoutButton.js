import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';
export default function LogoutButton() {
    const navigation = useNavigation();

    const handleLogout = () => {
        // Add code here to log the user out
        navigation.navigate('LoginForm');
    };

    return (
        <View>
            <Pressable style={styles.button} onPress={handleLogout}>
                <Text style={styles.text}>Logout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 20,
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: colors.primaryVariant,
        padding: 10,
    },
    text: {
        fontSize: 16,
        color: 'white',
    }
});