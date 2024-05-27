import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

export default function SearchByNameScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [exercise, setexercise] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        console.log('Searching for:', query);
        // SEARCH FUNCTIONALITY HERE
        setLoading(true);
        const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery.toLowerCase()}`;
           try {
              const response = await axios.get(url, {
                params: { limit: '30' },
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

                <Pressable style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>TEST</Text>
                </Pressable>
                {loading ? (
                    <Text style={styles.message}>Loading...</Text>
                ) : (
                    <FlatList
                        data={exercise}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.exerciseItem}>
                                <Text style={styles.exerciseName}>{item.name}</Text>
                            </View>
                        )}
                    />
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
        justifyContent: 'center',
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
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: 'green',
    },
    exerciseItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    exerciseName: {
        fontSize: 16,
    },
});
