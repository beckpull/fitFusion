import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Linking, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { I18nContext } from '../../App';

const API_KEY = '83e7b281b3864bf888cb227cd1e5cb2c'

export default function Blog({ navigation }) {
  const { i18n } = useContext(I18nContext);

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const topics = ['fitness', 'health', 'nutrition', 'exercise', 'wellness'];
    // Select a random topic from the list, everytime the component is rendered, in this
    // case, when the app is started.
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    fetch(`https://newsapi.org/v2/everything?q=${randomTopic}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setBlogPosts(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  function BlogPost({ title, text, date, image, link }) {
    useEffect(() => {
      navigation.setOptions({
        headerTitle: '',
        headerTransparent: true,
      });
    }, [navigation]);
    return (
      <View style={styles.blogContainer}>
        <Image style={styles.image} source={{ uri: image }} />
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
      <Text style={styles.heading}>{i18n.t('This is our blog')}!</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#17a2b8" />
      ) : (
        blogPosts.map((blog, index) => (
          <BlogPost
            key={index}
            title={blog.title}
            text={blog.description}
            date={new Date(blog.publishedAt).toDateString()}
            image={blog.urlToImage}
            link={blog.url}
          />
        ))
      )}
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