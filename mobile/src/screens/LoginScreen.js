import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ paddingLeft: 10, paddingTop: 10 }}>
        <TouchableOpacity style={{ height: 48, width: 48 }}>
          <Ionicons
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-back-outline"
            size={48}
            color={COLORS.PersianGreen}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={images.logo}
          style={{
            resizeMode: "contain",
            height: 100,
            width: 100,
          }}
        />
        <Text
          style={{
            color: COLORS.PersianGreen,
            fontWeight: "bold",
            fontSize: 26,
            margin: 20
          }}>
          ĐĂNG NHẬP
        </Text>

        <View style={{ margin: 20, width: "80%" }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập email."
            keyboardType="email-address"
          />
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập mật khẩu."
            secureTextEntry
          />
          {/* <Button color={COLORS.PersianGreen} title="Đăng nhập" style={styles.buttonLogin} /> */}
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? COLORS.Light50PersianGreen
                  : COLORS.PersianGreen,
              },
              styles.buttonLogin,
            ]}>
            <Text
              style={{
                color: COLORS.white,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              }}>
              Đăng nhập
            </Text>
          </Pressable>

          <TouchableOpacity>
          <Text style={{color: COLORS.blue, fontStyle: 'italic', textDecorationLine: 'underline'}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} >
        <Text style={{color: COLORS.blue}}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.silver,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  label: {
    color: COLORS.PersianGreen,
    marginVertical: 4,
  },
  buttonLogin: {
    marginTop: 12,
    borderRadius: 999,
    color: COLORS.PersianGreen,
    padding: 7,
  },
});
