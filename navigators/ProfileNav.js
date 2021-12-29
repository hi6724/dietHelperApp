import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import ProfileScreen from "../screens/profile/ProfileScreen";
import ProfileSettingScreen from "../screens/profile/ProfileSettingScreen";

const Stack = createStackNavigator();
export default ProfileNav = () => {
  const { value } = useSelector((state) => state.userReducer);
  console.log(value);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={value ? "ProfileScreen" : "ProfileSetting"}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
    </Stack.Navigator>
  );
};
