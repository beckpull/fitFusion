import { Text, Pressable, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { I18nContext } from '../../I18n';

export default function ButtonSignUp({ navigation }) {
  const { i18n } = useContext(I18nContext);
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('WorkoutPlan')}>
      <Text style={styles.buttonText}>{i18n.t('workouts')}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
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
})