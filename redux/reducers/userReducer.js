import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.value++;
    },
    logout(state) {
      state.value--;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
