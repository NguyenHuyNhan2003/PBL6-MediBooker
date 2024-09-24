import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const BookingHistoryScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="" />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Lịch khám bệnh</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookingHistoryScreen;
