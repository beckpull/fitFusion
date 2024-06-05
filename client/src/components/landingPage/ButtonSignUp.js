import { Text, Pressable, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { I18nContext } from '../../../App';

export default function ButtonSignUp({ navigation }) {
  const { i18n } = useContext(I18nContext);

  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('SignUpForm')}>
      <Text style={styles.buttonText}>{i18n.t('Sign Up')}</Text>
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