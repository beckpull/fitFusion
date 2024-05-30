import { View, Image } from "react-native";
import icon from "../../assets/FitFusionLogoType.png";

export default function Title() {
  return (
    <View>
      <Image
        source={icon}
        style={{ width: 150, height: 80 }}
      />
    </View>
  )
}