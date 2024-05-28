import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;

  // Assuming the exercise object contains all the necessary information
  const { title, gifUrl, bodyPart, target, secondaryMuscles, instructions } = exercise;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: gifUrl }} style={styles.image} />
        <Text style={styles.subtitle}>Body Part:</Text>
        <Text style={styles.description}>{bodyPart}</Text>
        <Text style={styles.subtitle}>Target Muscles:</Text>
        <Text style={styles.description}>{target}</Text>
        <Text style={styles.subtitle}>Secondary Muscles:</Text>
        <Text style={styles.description}>{secondaryMuscles}</Text>
        <Text style={styles.subtitle}>Instructions:</Text>
        <Text style={styles.description}>{instructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});

export default ExerciseDetail;
