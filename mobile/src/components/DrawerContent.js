import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, images } from "../constants";

const email = "lehue1802@gmail.com";
const DrawerContent = ({ navigation }) => {
  const shouldShowText = false;
  return (
    <View style={styles.container}>
      <Image source={images.user_default} style={styles.image} />
      <Text
        style={{
          color: COLORS.PersianGreen,
          fontWeight: "bold",
          fontSize: 16,
        }}>
        Khách
      </Text>
      <Text
        style={[
          { color: COLORS.black, fontSize: 12 },
          !shouldShowText && { display: "none" },
        ]}>
        email@gmail.com
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("Login")
        //   navigation.goBack();
        }}
        style={[
          { color: COLORS.black, fontSize: 12 },
          shouldShowText && { display: "none" },
        ]}>
        Đăng nhập/đăng kí
      </Text>
      <View style={styles.separate}></View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: "cover",
    borderRadius: 999,
    borderColor: COLORS.PersianGreen,
    padding: 10,
    borderWidth: 3,
    backgroundColor: COLORS.silver,
  },
  separate: {
    backgroundColor: COLORS.PersianGreen,
    height: 1,
    marginVertical: 10,
    width: "80%",
  },
});
