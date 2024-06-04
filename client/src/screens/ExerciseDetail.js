import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;

  // Assuming the exercise object contains all the necessary information
  const { name, gifUrl, equipment, bodyPart, target, secondaryMuscles, instructions } = exercise;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image source={{ uri: gifUrl }} style={styles.image} />
        <Text style={styles.subtitle}>Equipment:</Text>
        <Text style={styles.description}>{equipment}</Text>
        <Text style={styles.subtitle}>Body Part:</Text>
        <Text style={styles.description}>{bodyPart}</Text>
        <Text style={styles.subtitle}>Target Muscles:</Text>
        <Text style={styles.description}>{target}</Text>
        <Text style={styles.subtitle}>Secondary Muscles:</Text>
        <Text style={styles.description}>{secondaryMuscles}</Text>
        <View style={styles.instructionList}>
          {instructions.split(', ').map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.instruction}>{index + 1}.  {instruction}</Text>
            </View>
          ))}
        </View>
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
  instructionItem: {
    marginBottom: 15
  },
});

export default ExerciseDetail;
