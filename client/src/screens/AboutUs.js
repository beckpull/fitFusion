import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import image1 from '../assets/images/about_us_1.jpg';
import image2 from '../assets/images/about_us_2.jpg';
import image3 from '../assets/images/about_us_3.jpg';
import Testimonials from '../components/AboutUs/Testimonials';
import Footer from '../components/AboutUs/Footer';
import { I18nContext } from '../../I18n';

const { width } = Dimensions.get('window');
const height = width * 0.6; // 60%

const images = [
  image1, image2, image3
];

const AboutUs = ({ navigation }) => {
  const { i18n } = useContext(I18nContext);

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
        <View style={styles.mainText}>
          <Text style={styles.text}>{i18n.t('Welcome to')} <Text style={styles.bold}>FitFusion</Text> {i18n.t('fitFusionDescription')}
          </Text>
        </View>


        <Testimonials />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginEnd: 5,
    // flex: 1,
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
  mainText: {
    padding: 10,
  }
});

export default AboutUs;