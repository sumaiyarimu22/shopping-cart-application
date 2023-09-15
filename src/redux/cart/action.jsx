import { ADD_CART } from "./actionTypes";
const addToCart = (value, id) => {
  return {
    type: ADD_CART,
    payload: {
      value,
      id,
    },
  };
};
export { addToCart };
