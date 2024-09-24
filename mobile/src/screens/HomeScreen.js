import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { COLORS, images } from "../constants";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { articles } from "../utils/articles";
import NewsList from "../components/NewsList";

const dataArticles = articles.map((s) => ({
  title: s.title,
  id: s.id,
  content: s.content,
  date: s.date
}));

// console.log(dataArticles)

const HomeScreen = ({ route }) => {
  const { user } = route.params || {};

  const handleLogin = () => {
    if (!user) {
      console.log("false");
    } else {
      console.log(user.email); // In ra email hoặc giá trị khác
    }
    // console.log(user.email);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="TRANG CHỦ" user={user} />
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Image source={images.poster} style={styles.imgPoster} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}>
            <View style={styles.separate}></View>

            <Pressable
              onPress={handleLogin}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? COLORS.Light50PersianGreen
                    : COLORS.PersianGreen,
                },
                styles.buttonContainer,
              ]}>
              <View style={styles.buttonIcon}>
                <Entypo name="calendar" size={24} color={COLORS.white} />
                <Text style={styles.text}>Đặt lịch khám bệnh</Text>
              </View>
            </Pressable>

            <View style={styles.separate}></View>
          </View>
        </View>
        {/* khung frame features */}
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.silver,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: COLORS.silver,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderRightWidth: 1,
                borderColor: COLORS.silver,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <Entypo name="calendar" size={24} color={COLORS.white} />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>Chuyên khoa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderRightWidth: 1,
                borderColor: COLORS.silver,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <FontAwesome5 name="blog" size={24} color={COLORS.white} />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>
                Chuyên mục tư vấn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <FontAwesome6
                  name="user-doctor"
                  size={24}
                  color={COLORS.white}
                />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>Bác sĩ</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderRightWidth: 1,
                borderColor: COLORS.silver,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <FontAwesome5 name="search" size={24} color={COLORS.white} />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>
                Tra cứu kết quả
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderRightWidth: 1,
                borderColor: COLORS.silver,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <MaterialIcons
                  name="miscellaneous-services"
                  size={24}
                  color={COLORS.white}
                />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>Dịch vụ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.PersianGreen,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                }}>
                <MaterialIcons
                  name="content-paste-search"
                  size={24}
                  color={COLORS.white}
                />
              </View>
              <Text style={{ flex: 1, textAlign: "center" }}>Hướng dẫn</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* khung frame news */}
        <View style={{}}>
          <Text>Tin tức mới nhất:</Text>
          <NewsList data={dataArticles} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    marginLeft: 10,
    color: COLORS.white,
    fontWeight: "bold",
  },
  imgPoster: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  buttonContainer: {
    width: "70%",
    marginHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: COLORS.Light20PersianGreen,
    color: COLORS.PersianGreen,
  },
  buttonIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  separate: {
    width: "10%",
    height: 3,
    backgroundColor: COLORS.PersianGreen,
    borderRadius: 999,
  },
});
