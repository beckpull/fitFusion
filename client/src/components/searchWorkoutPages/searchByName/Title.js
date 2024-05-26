import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.title}>World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    lineHeight: 40,
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  small: {
    fontSize: 20,
  },
});