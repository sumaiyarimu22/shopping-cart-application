import {
  ADD_MANY_QUANTITY,
  ADD_PRODUCT_QUANTITY,
  PRODUCT_ADDED,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionTypes";

const addProduct = (product) => {
  return {
    type: PRODUCT_ADDED,
    payload: product,
  };
};

const addProductQuantity = (product) => {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload: product,
  };
};
const removeProductQuantity = (productId) => {
  return {
    type: REMOVE_PRODUCT_QUANTITY,
    payload: productId,
  };
};

const addManyQuantity = (productId) => {
  return {
    type: ADD_MANY_QUANTITY,
    payload: productId,
  };
};

export {
  addProduct,
  addProductQuantity,
  removeProductQuantity,
  addManyQuantity,
};
