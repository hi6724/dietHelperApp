import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";

export default ProfileScreen = ({ navigation }) => {
  const profileData = [
    { text: "알", image: require("../../assets/profile/1.png") },
    { text: "병아리", image: require("../../assets/profile/2.png") },
    { text: "닭", image: require("../../assets/profile/3.png") },
    { text: "파랑새", image: require("../../assets/profile/4.png") },
    { text: "학", image: require("../../assets/profile/5.png") },
    { text: "독수리", image: require("../../assets/profile/6.png") },
    { text: "피닉스", image: require("../../assets/profile/7.png") },
  ];
  return (
    <Container>
      <AvatarContainer>
        <Avatar resizeMode="contain" source={profileData[1].image} />
        <Username>{profileData[1].text}</Username>
      </AvatarContainer>
      <WhiteView>
        <BtnText>몸무게 : 78kg / 키 : 178cm</BtnText>
      </WhiteView>
      <WhiteView>
        <BtnText>목표몸무게까지 : -13kg</BtnText>
      </WhiteView>
      <WhiteView>
        <BtnText>지금까지 참아온 양 : 3498kcal</BtnText>
      </WhiteView>
      <WhiteBtn onPress={() => navigation.navigate("ProfileSetting")}>
        <BtnText>설정변경</BtnText>
      </WhiteBtn>
    </Container>
  );
};
const EditContainer = styled.Modal``;
const Container = styled.ScrollView`
  flex: 1;
  padding: 15px;
`;
const AvatarContainer = styled.View`
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Avatar = styled.Image`
  height: 125px;
  border-radius: 25px;
`;
const Username = styled.Text`
  font-family: "BM-Pro";
  font-size: 22px;
`;
const WhiteBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-bottom-width: 2px;
`;
const WhiteView = styled.View`
  width: 100%;
  padding: 15px;
  border-bottom-width: 2px;
`;
const BtnText = styled.Text`
  font-family: "BM-Pro";
  font-size: 22px;
`;
const Overview = styled.View`
  margin-top: 15px;
`;
const OverviewItem = styled.TouchableOpacity`
  background-color: rgba(82, 196, 26, 0.2);
  border-radius: 25px;
  margin-top: 15px;

  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
`;
const UploadBtn = styled(OverviewItem)`
  background-color: rgba(46, 100, 229, 0.2);
  border-color: #a82e2e;
`;
const FailOverview = styled(OverviewItem)`
  background-color: rgba(255, 77, 79, 0.2);
  border-color: #a82e2e;
`;
const AccentFont = styled.Text`
  font-size: 22px;
  font-family: "BM-Pro";
  color: #52c41a;
`;
const FailText = styled(AccentFont)`
  color: #a82e2e;
`;
const UploadText = styled(AccentFont)`
  color: rgb(46, 100, 229);
`;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,

    elevation: 2,
  },
});
