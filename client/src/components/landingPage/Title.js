import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Fit</Text>
      <Text style={styles.title}>
        Fusion<Text style={styles.small}>®</Text>
      </Text>
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