import { ADD_CART } from "./actionTypes";
const addToCart = (value) => {
  return {
    type: ADD_CART,
    payload: {
      value,
    },
  };
};
export { addToCart };
