import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Footer() {
  const handleIconPress = (iconName) => {
    // Placeholder function to handle icon press
    console.log(`${iconName} icon pressed`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.footer}>
        <Text style={styles.text}>© 2024 FitFusion</Text>
        <Text style={styles.text2}>Thanks to: </Text>
        <Text style={styles.names}>Rebecca Feltman, Silvia Reyes, Jordan Heersink, William Kalish, Zach Cook</Text>
        <Text style={styles.text}>Contact: support@fitfusion.com</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleIconPress('facebook')}>
            <Icon name='logo-facebook' size={24} color='white' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('instagram')}>
            <Icon name='logo-instagram' size={24} color='white' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('linkedin')}>
            <Icon name='logo-linkedin' size={24} color='white' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('youtube')}>
            <Icon name='logo-youtube' size={24} color='white' style={styles.icon} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => handleIconPress('x')}>
            <Icon name='logo-x' size={24} color='white' style={styles.icon} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => handleIconPress('snapchat')}>
            <Icon name='logo-snapchat' size={24} color='white' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingVertical: 20,
    backgroundColor: '#333',
  },
  footer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  text: {
    color: 'white',
    marginBottom: 10,
  },
  text2: {
    color: 'white',
    marginBottom: 5,
  },
  names: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  bottomSpace: {
    height: 30,
  },
});
