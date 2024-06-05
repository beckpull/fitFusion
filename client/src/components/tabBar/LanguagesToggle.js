import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import i18n from 'i18n-js';
import { I18nContext } from '../../../App';


export default function LanguageToggle() {
    const { i18n, changeLocale } = useContext(I18nContext);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.locale);


    const changeLanguage = (value) => {
        setSelectedLanguage(value);
        changeLocale(value);
        // i18n.locale = value;
        console.log('i18n.locale: ', i18n.locale);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={changeLanguage}
                style={{ height: 50, width: 150 }}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Español" value="es" />
                <Picker.Item label="Português" value="pt" />
            </Picker>
        </View>
    );
}