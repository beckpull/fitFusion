import { StyleSheet, View, Text } from "react-native";
import Colors from '../../styles/colors';

export default function CalendarProgress() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar Progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
  },
});