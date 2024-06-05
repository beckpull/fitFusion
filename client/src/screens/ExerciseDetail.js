import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;

  const { name, gifUrl, equipment, bodyPart, target, secondary, instructions } = exercise;
  console.log(instructions);

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
        <Text style={styles.description}>
        {secondary.map((muscle, index) => (
          <View key={index} style={styles.instructionItem}>
            <Text style={styles.instruction}>{muscle}</Text>
          </View>))}</Text>
        <Text style={styles.subtitle}>Instructions:</Text>
        <View style={styles.instructionList}>
            {instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <Text style={styles.instruction}>{index + 1}. {instruction}</Text>
              </View>))}
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
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  instructionList: {
    width: '100%',
  },
  instructionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  instruction: {
    fontSize: 16,
    color: '#333',
  },
});

export default ExerciseDetail;
