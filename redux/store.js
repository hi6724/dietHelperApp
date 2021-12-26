import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./reducers/foodReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    foodReducer: foodReducer,
    userReducer: userReducer,
  },
});
