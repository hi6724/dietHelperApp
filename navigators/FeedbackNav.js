import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FeedbackScreen from "../screens/search/FeedbackScreen";

const Stack = createStackNavigator();
export default FeedbackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FeedbackNav" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};
