import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 FitFusion</Text>
      <Text style={styles.text2}>Thanks to: </Text>
      <Text style={styles.text2}>Rebecca Feltman, Silvia Reyes, Jordan Heersink, William Kalish, Zach Cook</Text>
      <Text style={styles.text}>Contact: support@fitfusion.com</Text>
      <Text style={styles.text}>Version: 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  text2: {
    fontSize: 12,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});