import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddScreen from "../screens/home/AddScreen";
import HomeScreen from "../screens/home/HomeScreen";

const Stack = createStackNavigator();
export default HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddScreen" component={AddScreen} />
    </Stack.Navigator>
  );
};
