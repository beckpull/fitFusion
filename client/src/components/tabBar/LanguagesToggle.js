import React, { useState, useContext } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { I18nContext } from '../../../I18n';
import Colors from '../../styles/colors';


export default function LanguageToggle() {
    const { i18n, changeLocale } = useContext(I18nContext);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);


    const changeLanguage = (value) => {
        setSelectedLanguage(value);
        changeLocale(value);
        // console.log('i18n.locale: ', i18n.locale);
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => changeLanguage('en')} style={styles.languageButton}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: selectedLanguage === 'en' ? Colors.primaryVariant : 'black' }}>EN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeLanguage('es')} style={styles.languageButton}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: selectedLanguage === 'es' ? Colors.primaryVariant : 'black' }}>ES</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeLanguage('pt')} style={styles.languageButton}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: selectedLanguage === 'pt' ? Colors.primaryVariant : 'black' }}>PT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    languageButton: {
      backgroundColor: '##e5e8e8',
      borderRadius: 5,
      padding: 5,
      margin: 5,
    },
    languageText: {
      fontSize: 12,
      color: 'black',
    },
    selectedLanguageText: {
      fontSize: 12,
      color: 'blue',
    },
  });