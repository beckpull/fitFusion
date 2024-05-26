import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Search an</Text>
      <Text style={styles.title}>Exercise by</Text>
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