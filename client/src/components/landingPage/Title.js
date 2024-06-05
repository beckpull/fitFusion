import { View, Image } from "react-native";
import icon from "../../assets/FitFusionLogoType.png";

export default function Title() {
  return (
    <View>
      <Image
        source={icon}
        style={{ width: 200, height:120 }}
      />
    </View>
  )
}