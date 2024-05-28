import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Exercise = ({ route }) => {
  const { name, workouts } = route.params;
  const [planName, setPlanName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("This is a placeholder description for the exercise plan.");
  const [targetMuscleGroups, setTargetMuscleGroups] = useState("Legs, Glutes");
  const [secondaryMuscles, setSecondaryMuscles] = useState("Calves, Lower Back");

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={planName}
            onChangeText={setPlanName}
          />
        ) : (
          <Text style={styles.title}>{planName}</Text>
        )}
        <TouchableOpacity onPress={isEditing ? handleSave : handleRename} style={styles.iconButton}>
          <Icon name={isEditing ? "save" : "edit"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Description:</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.subtitle}>Target Muscle Groups:</Text>
      <Text style={styles.muscle}>{targetMuscleGroups}</Text>

      <Text style={styles.subtitle}>Secondary Muscles Targeted:</Text>
      <Text style={styles.muscle}>{secondaryMuscles}</Text>

      <Text style={styles.subtitle}>Workouts:</Text>
      {workouts.map((workout, index) => (
        <View key={index} style={styles.workoutCard}>
          <Text style={styles.workout}>{workout}</Text>
          <TouchableOpacity onPress={() => alert(`Edit ${workout}`)} style={styles.iconButton}>
            <Icon name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  muscle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  workout: {
    fontSize: 16,
    marginBottom: 5,
  },
  workoutCard: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default Exercise;
