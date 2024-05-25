import { StyleSheet, View } from "react-native";
import ButtonLogin from "./ButtonLogin";
import ButtonSignUp from "./ButtonSignUp";

export default function ButtonsContainer() {
  return (
    <View style={styles.buttonContainer}>
      <ButtonLogin />
      <ButtonSignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});