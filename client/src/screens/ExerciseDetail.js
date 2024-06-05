import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useQuery } from '@apollo/client';
import { GET_WORKOUT_PROGRESS } from '../utils/queries';

export default function ExerciseDetail({ route }) {
  const { exercise, planId } = route.params;
  // console.log('workoutPlanId', workoutPlanId);
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading, error } = useQuery(GET_WORKOUT_PROGRESS, {
    variables: { planId, workoutId: exercise._id },
  });

  const { name, gifUrl, equipment, bodyPart, target, secondary, instructions } = exercise;

  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.log(error);
  }

  const progressData = data?.workoutProgress || [];

  const processData = (progressData) => {
    const dates = progressData.map(item => new Date(item.date).toLocaleDateString());
    const sets = progressData.map(item => item.sets || 0);
    const reps = progressData.map(item => item.reps || 0);
    const weight = progressData.map(item => item.weight || 0);
    const duration = progressData.map(item => item.duration || 0);
    const distance = progressData.map(item => item.distance || 0);

    return {
      labels: dates,
      datasets: [
        { data: sets, color: () => `#ff0000`, strokeWidth: 2, label: 'Sets' },
        { data: reps, color: () => `#00ff00`, strokeWidth: 2, label: 'Reps' },
        { data: weight, color: () => `#0000ff`, strokeWidth: 2, label: 'Weight' },
        { data: duration, color: () => `#ff00ff`, strokeWidth: 2, label: 'Duration' },
        { data: distance, color: () => `#00ffff`, strokeWidth: 2, label: 'Distance' },
      ],
    };
  };

  const chartData = processData(progressData);

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
            </View>
          ))}
        </Text>
        <Text style={styles.subtitle}>Instructions:</Text>
        <View style={styles.instructionList}>
          {instructions[0].split(', ').map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.instruction}>{index + 1}. {instruction}</Text>
            </View>
          ))}
        </View>
        <Button title="View Progress" onPress={() => setModalVisible(true)} />
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Progress Over Time</Text>
            <LineChart
              data={chartData}
              width={400}
              height={400}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              bezier
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});



