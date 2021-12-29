import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userReducer";

export default function ProfileSettingScreen({ navigation }) {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("ProfileScreen");
  };
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} placeholder="키" />
        )}
        name="height"
      />
      {formState.errors.height && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} placeholder="현재 몸무게" />
        )}
        name="weight"
      />
      {formState.errors.weight && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} placeholder="목표 몸무게" />
        )}
        name="targetWeight"
      />
      {formState.errors.targetWeight && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        )}
        name="targetWeight"
      />
      {formState.errors.targetWeight && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
