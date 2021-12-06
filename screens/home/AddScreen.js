import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, FlatList, View } from "react-native";
import styled from "styled-components";
import nutritionApp from "../../nutritionApp";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { addFood } from "../../redux/store";

function AddScreen({ dispatch, state }) {
  const navigation = useNavigation();
  const { register, handleSubmit, getValues, setValue, watch } = useForm();
  const [results, setResults] = useState([]);
  const [temp, setTemp] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const onValid = async ({ foodName }) => {
    const response = await nutritionApp(foodName);
    setTemp(foodName);
    setTotalPage(Math.floor(response.totalCount / 10) + 1);
    setResults(response.items);
    setPage(response.pageNo + 1);
  };
  useEffect(() => {
    register("foodName", {
      required: true,
    });
  }, [register]);
  const addItem = (item) => {
    Alert.alert(item.DESC_KOR, "추가 하시겠습니까?", [
      { text: "취소" },
      {
        text: "확인",
        onPress: async () => {
          const data = await AsyncStorage.getItem("dietApp");
          let temp = item;
          let newData;
          temp.id = Date.now();
          if (data !== null) {
            newData = [...JSON.parse(data), temp];
          } else {
            newData = [temp];
          }
          dispatch(addFood(item));
          await AsyncStorage.setItem("dietApp", JSON.stringify(newData));
          navigation.navigate("HomeScreen");
        },
      },
    ]);
  };
  const Item = ({ item }) => (
    <NutritionContainer onPress={() => addItem(item)}>
      <Title>{item.DESC_KOR}</Title>
      <Nutrition>
        <NutritionText>열량 : {item.NUTR_CONT1}kcal</NutritionText>
        <NutritionText>탄수화물 : {item.NUTR_CONT2}g</NutritionText>
        <NutritionText>단백질 : {item.NUTR_CONT3}g</NutritionText>
        <NutritionText>지방 : {item.NUTR_CONT4}g</NutritionText>
        <NutritionText>1회 제공량 : {item.SERVING_WT}g</NutritionText>
      </Nutrition>
    </NutritionContainer>
  );
  const renderItem = ({ item }) => <Item item={item} />;
  const refetch = async () => {
    if (page <= totalPage) {
      const response = await nutritionApp(temp, page);
      const newResults = [...results, ...response.items];
      setResults(newResults);
      setPage((prev) => prev + 1);
    }
  };
  return (
    <Container>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Input
          placeholder="식품명"
          value={watch("foodName")}
          onSubmitEditing={handleSubmit(onValid)}
          onChangeText={(text) => setValue("foodName", text)}
        />
        <SearchIcon onPress={handleSubmit(onValid)}>
          <Ionicons name={"search"} color={"rgba(0,0,0,0.25)"} size={25} />
        </SearchIcon>
      </View>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        onEndReached={() => refetch()}
        onEndReachedThreshold={0.1}
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
export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);

const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;
const Container = styled.View`
  padding: 15px;
  margin-bottom: 50px;
`;
const Input = styled.TextInput`
  width: 100%;
  border-width: 2px;
  border-color: #d2d6d9;
  padding: 13px 15px;
  background-color: white;
  color: #070504;
  font-family: "BM-Pro";
`;
const NutritionContainer = styled.TouchableOpacity`
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;
const Nutrition = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 5px;
  /* height: 60px; */
  flex-wrap: wrap;
`;
const NutritionText = styled.Text`
  margin: 5px 5px;
  font-family: "BM-Air";
`;
const Title = styled.Text`
  font-family: "BM-Pro";
`;
