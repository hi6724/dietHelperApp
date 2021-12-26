import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import HomeNav from "./HomeNav";
import SearchNav from "./FeedbackNav";
import ProfileNav from "./ProfileNav";
const Tabs = createBottomTabNavigator();

export default Nav = () => {
  const navigation = useNavigation();
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const setTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let t = "오전";
    if (hours >= 12) {
      t = "오후";
      hours = hours - 12;
    }
    const now = `${t} ${hours}:${minutes}`;
    return now;
  };
  const [clock, setClock] = useState(setTime());

  useEffect(() => {
    setInterval(() => {
      setClock(setTime);
    }, 40000);
  }, []);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "HomeNav") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SearchNav") {
            iconName = focused ? "podium" : "podium-outline";
          } else if (route.name === "ProfileNav") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "rgba(0,0,0,0.8)",
        tabBarInactiveTintColor: "rgba(0,0,0,0.6)",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tabs.Screen
        name="HomeNav"
        options={{
          header: ({}) => {
            return (
              <SafeAreaView style={styles.homeHeader}>
                <Text style={styles.date}>{`${currentMonth}.${today} ${clock}`}</Text>
              </SafeAreaView>
            );
          },
        }}
      >
        {() => <HomeNav />}
      </Tabs.Screen>

      <Tabs.Screen
        name="SearchNav"
        options={{
          header: ({}) => {
            return (
              <SafeAreaView style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name={"chevron-back-outline"} size={25} />
                </TouchableOpacity>
                <Text style={styles.headerText}>피드백</Text>
              </SafeAreaView>
            );
          },
        }}
      >
        {() => <SearchNav />}
      </Tabs.Screen>

      <Tabs.Screen
        name="ProfileNav"
        options={{
          header: ({}) => {
            return (
              <SafeAreaView style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name={"chevron-back-outline"} size={25} />
                </TouchableOpacity>
                <Text style={styles.headerText}>프로필</Text>
              </SafeAreaView>
            );
          },
        }}
      >
        {() => <ProfileNav />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  homeHeader: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
  date: {
    fontFamily: "BM-Pro",
    opacity: 0.3,
  },
  headerText: {
    fontFamily: "BM-Pro",
    fontSize: 26,
    marginLeft: 20,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});
