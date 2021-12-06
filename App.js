import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import Nav from "./navigators/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    "BM-Pro": require("./assets/fonts/BM/BMHANNAPro.ttf"),
    "BM-E": require("./assets/fonts/BM/BMEULJIROTTF.ttf"),
    "BM-Y": require("./assets/fonts/BM/BMYEONSUNG_ttf.ttf"),
    "BM-Air": require("./assets/fonts/BM/BMHANNAAir_ttf.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "BM-Pro",
  },
});
