import { View } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  BookingHistory,
  BookingHistoryScreen,
  Home,
  HomeScreen,
  Login,
  UserInfo,
} from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerContent from "../components/DrawerContent";
import { COLORS } from "../constants";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ route }) => {
  // const { user } = route.params || {};
  // // console.log(user);
  // if (!user) {
  //   console.log("false");
  // } else {
  //   console.log(user.email); // In ra email hoặc giá trị khác
  // }
  const role = "user";
  const status = false;

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <DrawerContent navigation={props.navigation} />
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          marginTop: 32,
          backgroundColor: COLORS.white,
          width: 250,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        drawerActiveTintColor: COLORS.PersianGreen, // Màu của icon và label khi selected
        drawerInactiveTintColor: COLORS.black, // Màu của icon và label khi không selected
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="BookingHistory"
        options={{
          drawerLabel: "Lịch khám bệnh",
          title: "BookingHistory",
          headerShadowVisible: false,
          drawerIcon: ({ color }) => (
            <Entypo name="calendar" size={24} color={color} />
          ),
        }}
        component={BookingHistory}
      />

      <Drawer.Screen
        name="Noti"
        options={{
          drawerLabel: "Diễn đàn",
          title: "Noti",
          headerShadowVisible: false,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
        component={UserInfo}
      />

      <Drawer.Screen
        name="Noticed"
        options={{
          drawerLabel: "Thông báo",
          title: "Noticed",
          headerShadowVisible: false,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
        component={UserInfo}
      />

      {status === true ? (
        <Drawer.Screen
          name="UserInfo"
          options={{
            drawerLabel: "Tài khoản",
            title: "UserInfo",
            headerShadowVisible: false,
            drawerIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
          component={UserInfo}
        />
      ) : (
        <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: "Đăng nhập",
            title: "Login",
            headerShadowVisible: false,
            drawerIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
          component={Login}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
