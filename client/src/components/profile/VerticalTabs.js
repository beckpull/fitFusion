import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function VerticalTabs() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabData = [
        { title: 'Movement', image: require('../../assets/images/image1.png'), description: 'Do you have any injuries or discomfort? We adapt it completely or partially to take care of you.' },
        { title: 'Carga', image: require('../../assets/images/image2.png'), description: 'According to your goal! You choose to Tone or Increase' },
        { title: 'Intensity', image: require('../../assets/images/image3.png'), description: ' It depends on your physical condition. We propose the movement, you set the intensity.' }
    ];

    const handleTabPress = (index) => {
        setSelectedTab(index);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.variablesText}>Variables</Text>
            <Text style={styles.descriptionText}>In FitFusion® we adapt our variables to your physical capacity, so that you quickly adapt and achieve the expected results.</Text>
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
    },
    tab: {
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 5,
        paddingEnd: 5,
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
    },
    descriptionText: {
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 10,
    },
});

