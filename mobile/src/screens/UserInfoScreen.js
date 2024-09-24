import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const UserInfo = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons
        onPress={() => {
          navigation.goBack();
        }}
        name="arrow-back-outline"
        size={48}
        color="black"
      />
      <Text>Account Information</Text>
    </View>
  );
};

export default UserInfo;
