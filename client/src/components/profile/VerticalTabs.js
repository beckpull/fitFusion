import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { I18nContext } from '../../../I18n';

export default function VerticalTabs({ allProgress }) {
  const { i18n } = useContext(I18nContext);
  console.log("this is allProgress from Verticaltabs:", allProgress);
  const [selectedTab, setSelectedTab] = useState(0);
  allProgress.map(progress => {
    console.log("weight", progress.weight);
    console.log("duration", progress.duration);
    console.log("distance", progress.distance)
  })
  const totalWeight = allProgress.reduce((accumulator, progress) => {
    return accumulator + progress.weight;
  }, 0);
  console.log("total weight", totalWeight);
  const totalDistance = allProgress.reduce((accumulator, progress) => {
    return accumulator + progress.distance;
  }, 0);
  console.log('TotalDistance:', totalDistance);
  const totalDuration = allProgress.reduce((accumulator, progress) => {
    return accumulator + progress.duration;
  }, 0);
  console.log('totalDuration:', totalDuration);

  const tabData = [
    {
      title: i18n.t('Movement'),
      image: require('../../assets/images/image1.png'), 
      description: i18n.t('moved_description', { distance: totalDistance })
    },
    { 
      title: i18n.t('Weight'), 
      image: require('../../assets/images/image3.png'), 
      description: i18n.t('lifted_description', { weight: totalWeight })
    },
    { 
      title: i18n.t('Intensity'), 
      image: require('../../assets/images/image2.png'), 
      description: i18n.t('moved_duration_description', { duration: totalDuration }) 
    }
    ];

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.variablesText}>{i18n.t('Stats')}:</Text>
      {/* <Text style={styles.descriptionText}>In FitFusion® we adapt our variables to your physical capacity, so that you quickly adapt and achieve the expected results.</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabData.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, index === selectedTab && styles.selectedTab]}
            onPress={() => handleTabPress(index)}
          >
            <Text style={styles.tabTitle}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.contentContainer}>
        <View style={styles.imageDescriptionContainer}>
          <Image source={tabData[selectedTab].image} style={styles.image} />
          <Text style={styles.description}>{tabData[selectedTab].description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    marginTop: 30,
  },
  tab: {
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 2,
    paddingEnd: 2,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 3,
    justifyContent: 'center',
    padding: 20,
  },
  imageDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  description: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  variablesText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 40,
  },
  descriptionText: {
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});

