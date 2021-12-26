import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood(state, action) {
      state.value = [...state.value, action.payload];
    },
    deleteFood(state, action) {
      state.value = state.value.filter((food) => food.id !== action.payload);
    },
    editFood(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addFood, deleteFood, editFood } = foodSlice.actions;
export default foodSlice.reducer;
