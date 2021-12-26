import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Text>현제 몸무게 입력</Text>
      <Text>현제 키 입력</Text>
      <Text>현제 나이 입력</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Text>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
