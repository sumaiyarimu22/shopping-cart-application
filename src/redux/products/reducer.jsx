import { PRODUCT_ADDED } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;