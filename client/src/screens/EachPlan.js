import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EachPlan = ({ route, navigation }) => {
  const { name, workouts, goal } = route.params;
  const [planName, setPlanName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleExerciseClick = (exercise) => {
    navigation.navigate('ExerciseDetail', { exercise });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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

        <Text style={styles.subtitle}>Goal:</Text>
        <Text style={styles.description}>{goal}</Text>

        <Text style={styles.subtitle}>Workouts:</Text>
        {workouts.map((workout, index) => (
          <TouchableOpacity key={index} onPress={() => handleExerciseClick(workout)} style={styles.workoutCard}>
            <Text style={styles.workout}>{workout.name}</Text>
            <Icon name="angle-right" size={24} color="black" />
          </TouchableOpacity>
        ))}
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
  workout: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 10,
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
  iconButton: {
    marginLeft: 10,
  },
});

export default EachPlan;
