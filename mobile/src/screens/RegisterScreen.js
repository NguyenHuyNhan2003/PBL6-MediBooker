import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images } from "../constants";
import { useState } from "react";
import RadioButton from "../components/RadioButton";

const RegisterScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [message, setMessage] = useState("");

  const options = [
    { label: "Bác sĩ", value: "doctor" },
    { label: "Người dùng", value: "user" },
  ];

  const handleRegister = () => {
    selectedOption === "user"
      ? navigation.navigate("Home", { user: {email: "lehue@gmail.com", name: "Le Hue"} })
      : selectedOption === "doctor"
      ? navigation.navigate("DoctorRegister")
      : setMessage("Bạn chưa chọn loại tài khoản muốn đăng kí");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              onPress={() => {
                navigation.goBack();
              }}
              name="arrow-back-outline"
              size={48}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>ĐĂNG KÝ TÀI KHOẢN</Text>
        </View>

        <Text style={styles.message}>{message}</Text>
        <View style={{ flex: 1, margin: 20 }}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
            inputMode="email"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
            secureTextEntry
          />
          <Text style={styles.label}>Xác nhận lại mật khẩu</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Value"
            secureTextEntry
          />
          <Text style={styles.label}>Loại tài khoản</Text>
          {/* radiobutton */}
          <RadioButton
            options={options}
            selectedOption={selectedOption}
            onSelect={(value) => (setMessage(""), setSelectedOption(value))}
          />

          <Pressable
            onPress={() => {
              // console.log(selectedOption);
              handleRegister();
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? COLORS.Light50PersianGreen
                  : COLORS.PersianGreen,
              },
              styles.button,
            ]}>
            <Text
              style={{
                color: COLORS.white,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              }}>
              Đăng ký
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: COLORS.PersianGreen,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    marginVertical: 15,
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.silver,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 10,
  },
  label: {
    color: COLORS.PersianGreen,
    marginVertical: 4,
  },
  button: {
    marginTop: 12,
    borderRadius: 999,
    color: COLORS.PersianGreen,
    padding: 7,
  },
  message: {
    color: COLORS.red,
    textAlign: "center",
    marginHorizontal: 35,
  },
});
