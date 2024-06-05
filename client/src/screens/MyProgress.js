import { text } from '@fortawesome/fontawesome-svg-core';
import CalendarProgress from '../components/MyProgress/CalendarProgress';
import Colors from '../styles/colors';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyProgress({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
      headerShown: false,
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <View style={styles.contText}>
        <Text style={styles.text}>Calendar Progress</Text>
      </View>
      <CalendarProgress />
      <View style={styles.contText}>
        <Text style={styles.textAlert}>Workout you have already done it will show in green</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
  contText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlert: {
    fontSize: 16,
    color: Colors.calendarCheck,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
