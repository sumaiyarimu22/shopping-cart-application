import { PRODUCT_ADDED } from "./actionTypes";

const addProduct = (value) => {
  return {
    type: PRODUCT_ADDED,
    payload: value,
  };
};

export { addProduct };
