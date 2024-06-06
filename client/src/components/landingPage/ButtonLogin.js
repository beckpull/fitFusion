import { Text, Pressable, StyleSheet } from 'react-native';
import { I18nContext } from '../../../I18n';
import { useContext } from 'react';

export default function ButtonLogin({ navigation }) {
  const { i18n } = useContext(I18nContext);

  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('LoginForm')}>
      <Text style={styles.buttonText}>{i18n.t('Login')}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});