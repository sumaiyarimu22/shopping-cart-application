import { PRODUCT_ADDED } from "./actionTypes";
const initialState = [];

const nextProductId = (product) => {
  const maxId = product.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: nextProductId(state),
          ...action.payload,
        },
      ];

    default:
      return state;
  }
};
export default productReducer;
