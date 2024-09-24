import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./DrawerNavigation";
import { DoctorRegister, Home, Login, Register, UserRegister } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main">
            <Stack.Screen name="Main" component={DrawerNavigation} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="UserRegister" component={UserRegister} />
            <Stack.Screen name="DoctorRegister" component={DoctorRegister} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;