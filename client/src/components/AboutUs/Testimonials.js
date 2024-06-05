import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { I18nContext } from '../../../App';

function Testimonials() {

    const { i18n } = useContext(I18nContext);

    const recommendations = [
        {
            name: 'Nick Johnson',
            country: 'United States',
            image: 'test1',
            text: "testimonial1",
        },
        {
            name: 'Mary Smith',
            country: 'Canada',
            image: 'test2',
            text: "testimonial2",
        },
        {
            name: 'Andreia Silva',
            country: 'Brazil',
            image: 'test3',
            text: "testimonial3",
        }
    ]

    function FitFusionTestimonials({ name, country, image, text }) {
        const images = {
            test1: require('../../assets/images/test1.jpg'),
            test2: require('../../assets/images/test2.jpg'),
            test3: require('../../assets/images/test3.jpg'),
            
        }

        const flagImages = {
            'United States': require('../../assets/images/usa.png'),
            'Canada': require('../../assets/images/canada.png'),
            'Brazil': require('../../assets/images/brazil.png'),
        }

        const [imageUri, setImageUri] = useState(null);

        useEffect(() => {
            setImageUri(images[image]);
        }, [image]);

        return (
            <View style={styles.recommendationContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageUri} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>
                    <Text style={styles.bold}>{name}</Text> {i18n.t('in')} <Image source={flagImages[country]} style={{width: 20, height: 15}} />
                    </Text>
                    <Text style={styles.text}>
                        "{i18n.t(text)}"
                    </Text>
                    <Text>⭐⭐⭐⭐⭐</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>{i18n.t('Success Stories')}:</Text>
            {recommendations.map((recommendation, index) => (
                <FitFusionTestimonials
                    key={index}
                    name={recommendation.name}
                    country={recommendation.country}
                    image={recommendation.image}
                    role={recommendation.role}
                    company={recommendation.company}
                    text={recommendation.text}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    recommendationContainer: {
        backgroundColor: '#f8f9fa',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        borderColor: '#17a2b8',
        borderWidth: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    textContainer: {
        flex: 3,
        paddingLeft: 16,
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
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

export default Testimonials;