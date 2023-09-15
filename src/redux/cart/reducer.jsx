import { ADD_CART } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default reducer;
