import {
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
import RadioButton from "../components/RadioButton";
import { COLORS } from "../constants";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { specialities } from "../utils/specialities";
import Entypo from "@expo/vector-icons/Entypo";

const dataSpecialities = specialities.map((s) => ({
  value: s.label,
  id: `${s.flag} ${s.value}`, // Sử dụng dấu nháy ngược
}));

const DoctorRegister = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const handleSpecialityChange = (item) => {
    console.log("Selected country:", item.id);
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
          <Text style={styles.label}>Chuyên khoa</Text>
          <Dropdown
            data={dataSpecialities}
            onChange={handleSpecialityChange}
            placeholder="Chọn chuyên khoa"
          />

          <Text style={styles.label}>Thông tin giới thiệu(Bio)</Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputMultiline}
            placeholder="Value"
            keyboardType="default"
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.label}>Minh chứng (nếu có)</Text>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: COLORS.silver,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginLeft: 15,
              }}>
              <Entypo name="upload" size={18} color={COLORS.gray} />
            </TouchableOpacity>
          </View>

          <Pressable
            onPress={() => {}}
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
              Hoàn thành
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorRegister;

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
  inputMultiline: {
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.silver,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginBottom: 10,
    textAlignVertical: "top",
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
