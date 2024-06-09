import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from "react-native";
import Colors from '../../styles/colors';
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import goodJobImage from '../../assets/images/good_job.png';
import { I18nContext } from '../../../I18n';


export default function CalendarProgress() {
  const { i18n } = useContext(I18nContext);

  const { loading, error, data } = useQuery(GET_ME);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;


  const workoutData = data.me.workoutPlans.reduce((acc, workoutPlan) => {
    workoutPlan.workouts.forEach(workout => {
      workout.progress.forEach(progress => {
        acc[progress.date] = {
          selected: true,
          marked: true,
          selectedColor: Colors.calendarCheck,
          dotColor: 'white'
        };
      });
    });
    return acc;
  }, {});

  const handleDayPress = (day) => {
    if (workoutData[day.dateString]) {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDate(null);
  };

  const renderWorkoutDetails = (date) => {
    const workoutsForDate = [];

    data.me.workoutPlans.forEach(workoutPlan => {
      workoutPlan.workouts.forEach(workout => {
        workout.progress.forEach(progress => {
          if (progress.date === date) {
            workoutsForDate.push({ workout, progress });
          }
        });
      });
    });
    return workoutsForDate.map((item, index) => (
      <View key={index} style={styles.workoutContainer}>
        <Text>{i18n.t('Exercises')}: </Text>
        <Text style={styles.workoutName}>{item.workout.name} </Text>
        <View style={styles.content}>
        {item.progress.sets !== null && item.progress.reps !== null && item.progress.weight !== null ? (
                            <Text>
                              Sets: {item.progress.sets} Reps: {item.progress.reps} Weight: {item.progress.weight}
                            </Text>
                          ) : (
                            <Text>
                              Duration: {item.progress.duration} Distance: {item.progress.distance}
                            </Text>
                          )}
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={workoutData}
        onDayPress={handleDayPress}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <ScrollView>
              <Text style={styles.modalText}>Workout details </Text>
              <View style={{ alignItems: 'center' }}>
                <Image source={goodJobImage} style={{ width: 250, height: 100, marginTop: 20, marginBottom: 20 }}></Image>
              </View>
              <Text>Date: {selectedDate}</Text>
              {selectedDate && renderWorkoutDetails(selectedDate)}

            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
  modalContainer: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 20,
    color: 'red',
  },
  modalText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#e98168",
  },
  workoutContainer: {
    marginVertical: 10,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
  },
});