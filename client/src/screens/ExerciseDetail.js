import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Modal } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useQuery } from '@apollo/client';
import { GET_WORKOUT_PROGRESS } from '../utils/queries';
import { I18nContext } from '../../I18n';

export default function ExerciseDetail({ route }) {
  const { i18n } = useContext(I18nContext);
  const { exercise, planId } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading, error } = useQuery(GET_WORKOUT_PROGRESS, {
    variables: { workoutPlanId: planId, workoutId: exercise._id },
  });

  const { name, gifUrl, equipment, bodyPart, target, secondary, instructions } = exercise;

  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.log(error);
  }

  const progressData = data?.getWorkoutProgress || [];

  const processData = (progressData) => {
    const dates = progressData.map(item => {
      const date = new Date(item.date);
      return `${date.getMonth() + 1}/${date.getDate()}`; // Format MM/DD
    });
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

  const renderCustomLabel = (value, index) => {
    return (
      <View key={index} style={{ transform: [{ rotate: '90deg' }], marginTop: 15 }}>
        <Text style={{ color: '#fff', fontSize: 7 }}>{value}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Button title="View Progress" onPress={() => setModalVisible(true)} />
        <Image source={{ uri: gifUrl }} style={styles.image} />
        <Text style={styles.subtitle}>{i18n.t('Equipment')}:</Text>
        <Text style={styles.description}>{equipment}</Text>
        <Text style={styles.subtitle}>{i18n.t('Body Part')}:</Text>
        <Text style={styles.description}>{bodyPart}</Text>
        <Text style={styles.subtitle}>{i18n.t('Target Muscles')}:</Text>
        <Text style={styles.description}>{target}</Text>
        <Text style={styles.subtitle}>{i18n.t('Secondary Muscles')}:</Text>
        <Text style={styles.description}>
          {secondary.map((muscle, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.instruction}>{muscle}</Text>
            </View>
          ))}
        </Text>
        <Text style={styles.subtitle}>{i18n.t('Instructions')}:</Text>
        <View style={styles.instructionList}>
          {instructions[0].split(', ').map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.instruction}>{index + 1}. {instruction}</Text>
            </View>
          ))}
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{i18n.t('Progress Over Time')}</Text>
            <View style={styles.chartContainer}>
              <LineChart
                data={chartData}
                width={400}
                height={500}
                // yAxisLabel=""
                // withHorizontalLabels={true}
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
                  fromZero: true, // Ensure the chart starts from zero
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Color of the labels
                  renderLabel: renderCustomLabel,
                }}
                bezier
                showLegends={false} // Disable built-in legend
              />
              {/* Manual Legend */}
              <View style={styles.legendContainer}>
                <View style={[styles.legendItem, { backgroundColor: '#ff0000' }]} />
                <Text style={styles.legendText}>{i18n.t('Sets')}</Text>
                <View style={[styles.legendItem, { backgroundColor: '#00ff00' }]} />
                <Text style={styles.legendText}>Reps</Text>
                <View style={[styles.legendItem, { backgroundColor: '#0000ff' }]} />
                <Text style={styles.legendText}>{i18n.t('Weight')}</Text>
                <View style={[styles.legendItem, { backgroundColor: '#ff00ff' }]} />
                <Text style={styles.legendText}>{i18n.t('Duration')}</Text>
                <View style={[styles.legendItem, { backgroundColor: '#00ffff' }]} />
                <Text style={styles.legendText}>{i18n.t('Distance')}</Text>
              </View>
            </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 90,
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  legendItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  legendText: {
    marginLeft: 5,
    color: '#333',
  },
});
