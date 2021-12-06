import React, { useEffect, useState } from "react";
import { FloatingAction } from "react-native-floating-action";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { addFood, deleteFood } from "../../redux/store";
import { Alert, FlatList } from "react-native";

function HomeScreen({ dispatch, state }) {
  const [progress, setProgress] = useState(0);
  const [nutrition1, setNutrition1] = useState(0);
  const [nutrition2, setNutrition2] = useState(0);
  const [nutrition3, setNutrition3] = useState(0);
  const [nutrition4, setNutrition4] = useState(0);

  const navigation = useNavigation();
  useEffect(() => {
    const data = AsyncStorage.getItem("dietApp").then((data) => {
      JSON.parse(data).map((food) => dispatch(addFood(food)));
    });
  }, []);
  useEffect(() => {
    setNutrition1(0);
    setNutrition2(0);
    setNutrition3(0);
    setNutrition4(0);
    state.map((food) => {
      setNutrition1((prev) => Math.floor(prev + food.NUTR_CONT1 * 1));
      setNutrition2((prev) => Math.floor(prev + food.NUTR_CONT2 * 1));
      setNutrition3((prev) => Math.floor(prev + food.NUTR_CONT3 * 1));
      setNutrition4((prev) => Math.floor(prev + food.NUTR_CONT4 * 1));
    });
  }, [state]);
  useEffect(() => {
    setProgress(nutrition1 / 3200);
  }, [nutrition1]);
  const deleteItem = async (item) => {
    Alert.alert(item.DESC_KOR, "삭제 하시겠습니까?", [
      { text: "취소" },
      {
        text: "확인",
        onPress: async () => {
          const data = await AsyncStorage.getItem("dietApp");
          const newData = JSON.parse(data).filter(
            (food) => food.id !== item.id
          );
          dispatch(deleteFood(item.id));
          await AsyncStorage.setItem("dietApp", JSON.stringify(newData));
        },
      },
    ]);
  };
  const Item = ({ item }) => (
    <NutritionContainer2 onPress={() => deleteItem(item)}>
      <Title>{item.DESC_KOR}</Title>
      <Nutrition2>
        <NutritionText2>
          열량 : {Math.floor(item.NUTR_CONT1)}kcal
        </NutritionText2>
        <NutritionText2>
          탄수화물 : {Math.floor(item.NUTR_CONT2)}g
        </NutritionText2>
        <NutritionText2>단백질 : {Math.floor(item.NUTR_CONT3)}g</NutritionText2>
        <NutritionText2>지방 : {Math.floor(item.NUTR_CONT4)}g</NutritionText2>
        <NutritionText2>1회 제공량 : {item.SERVING_WT}g</NutritionText2>
      </Nutrition2>
    </NutritionContainer2>
  );
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <Container>
      <Overview>
        <Progress.Circle
          size={200}
          thickness={3}
          animated={true}
          progress={progress}
          borderWidth={3}
          showsText={true}
        />
        <NutritionContainer>
          <Nutrition>
            <NutritionText>열량</NutritionText>
            <NutritionText>{nutrition1}kcal</NutritionText>
          </Nutrition>
          <Nutrition>
            <NutritionText>탄수화물</NutritionText>
            <NutritionText>{nutrition2}g</NutritionText>
          </Nutrition>
          <Nutrition>
            <NutritionText>단백질</NutritionText>
            <NutritionText>{nutrition3}g</NutritionText>
          </Nutrition>
          <Nutrition>
            <NutritionText>지방</NutritionText>
            <NutritionText>{nutrition4}g</NutritionText>
          </Nutrition>
        </NutritionContainer>
      </Overview>
      <Detail>
        <FlatList
          data={state}
          renderItem={renderItem}
          keyExtractor={(_, index) => index}
          // onEndReached={() => refetch()}
          onEndReachedThreshold={0.1}
        />
      </Detail>
      <FloatingAction
        color="rgba(0,0,0,0.3)"
        overlayColor="transparent"
        iconWidth={20}
        iconHeight={20}
        floatingIcon={<Ionicons name={"search"} color={"white"} size={25} />}
        onPressMain={() => navigation.navigate("AddScreen")}
      />
    </Container>
  );
}

function mapStateToProps(state) {
  return { state };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.View`
  flex: 1;
`;
const Overview = styled.View`
  padding: 15px;
  flex: 0.6;
  align-items: center;
`;
const NutritionContainer = styled.View`
  margin-top: 25px;
  flex-wrap: wrap;
  flex-direction: column;
  height: 150px;
`;
const Nutrition = styled.View`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 5px;
  height: 60px;
  width: 150px;
`;
const NutritionText = styled.Text`
  font-family: "BM-Pro";
`;

const Detail = styled.View`
  flex: 0.4;
  background-color: azure;
`;
const NutritionContainer2 = styled.TouchableOpacity`
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;
const Nutrition2 = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 5px;
  /* height: 60px; */
  flex-wrap: wrap;
`;
const NutritionText2 = styled.Text`
  margin: 5px 5px;
  font-family: "BM-Air";
`;
const Title = styled.Text`
  font-family: "BM-Pro";
`;
