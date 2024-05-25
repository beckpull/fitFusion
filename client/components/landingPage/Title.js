import { StyleSheet, Text } from "react-native";

export default function Title() {
  return (
    <Text style={styles.title}>FitFusion</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});