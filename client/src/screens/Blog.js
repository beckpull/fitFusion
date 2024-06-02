import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Blog({ navigation }) {

  const blogPosts = [
    {
      title: 'How Healthy Are Ancient Grains?',
      text: 'Ancient types of wheat, like kamut, are put to the test for inflammation, blood sugar, and cholesterol control. ',
      date: '2024-05-09',
      image: require('../assets/images/blog1.jpg'),
      link: 'https://nutritionfacts.org/blog/how-healthy-are-ancient-grains/',
    },
    {
      title: 'Irregular Meals, Night Shifts, and Metabolic Harms ',
      text: 'What can shift workers do to moderate the adverse effects of circadian rhythm disruption?',
      date: '2024-05-16',
      image: require('../assets/images/blog2.jpg'),
      link: 'https://nutritionfacts.org/blog/irregular-meals-night-shifts-and-metabolic-harms/',
    },
    {
      title: 'Syncing Your Brain and Body Clocks ',
      text: 'Exposure to bright light synchronizes the central circadian clock in our brain, whereas proper meal timing helps sync the timing of different clock genes throughout the rest of our body. ',
      date: '2024-04-24',
      image: require('../assets/images/blog3.jpg'),
      link: 'https://nutritionfacts.org/blog/syncing-your-brain-and-body-clocks/',
    }
  ]

  function BlogPost({ title, text, date, image, link }) {
    useEffect(() => {
      navigation.setOptions({
        headerTitle: '',
        headerTransparent: true,
      });
    }, [navigation]);
    return (
      <View style={styles.blogContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.bold]}>
            {title}
          </Text>
          <Text style={styles.date}>
            {date}
          </Text>
          <Text style={styles.text}>
            {text}
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={styles.link}>
              {link}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>This is our blog!</Text>
      {blogPosts.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          text={blog.text}
          date={blog.date}
          image={blog.image}
          link={blog.link}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  blogContainer: {
    backgroundColor: '#f8f9fa',
    marginBottom: 16,
    borderRadius: 4,
    borderColor: '#17a2b8',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 16,
  },
  link: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
  },
});