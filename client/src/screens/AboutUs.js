import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import image1 from '../assets/images/about_us_1.jpg';
import image2 from '../assets/images/about_us_2.jpg';
import image3 from '../assets/images/about_us_3.jpg';
import Testimonials from '../components/AboutUs/Testimonials';

const { width } = Dimensions.get('window');
const height = width * 0.6; // 60%

const images = [
  image1, image2, image3
];

const AboutUs = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{ width, height }}
        >
          {images.map((image, i) => (
            <Image
              key={i}
              source={image}
              style={{ width, height, resizeMode: 'cover', borderRadius: 10 }}
            />
          ))}

        </ScrollView>

        <Text style={styles.text}>Welcome to <Text style={styles.bold}>FitFusion</Text> – your ultimate companion
          for personalized fitness training. At FitFusion, we believe that every fitness journey is unique, and we are
          dedicated to helping you achieve your individual goals through tailored workout regimens that suit your
          preferences and lifestyle.
        </Text>

        <Testimonials />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 40 : 50,

  },
  text: {
    marginTop: 20,
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutUs;