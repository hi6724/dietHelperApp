import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";

export const addFood = (data) => {
  return {
    type: ADD,
    data,
  };
};

export const deleteFood = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const editFood = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [action.data, ...state];
    case DELETE:
      return state.filter((food) => food.id !== action.id);
    case EDIT:
      return;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addFood,
  deleteFood,
};

export default store;
