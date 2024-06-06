import { text } from '@fortawesome/fontawesome-svg-core';
import CalendarProgress from '../components/MyProgress/CalendarProgress';
import Colors from '../styles/colors';
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { I18nContext } from '../../I18n';

export default function MyProgress({ navigation }) {
  const { i18n } = useContext(I18nContext);
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
        <Text style={styles.text}>{i18n.t('Calendar Progress')}</Text>
      </View>
      <CalendarProgress />
      <View style={styles.contText}>
        <Text style={styles.textAlert}>{i18n.t('Workout you have already done it will show in green')}</Text>
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
