import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function   IconButton({ iconName, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome
          name={iconName}
          size={24}
          color="gray"
          style={styles.buttonIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50, 
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
