import { ADD_CART } from "./actionTypes";

const initialState = [];

const isExist = (product, item) => {
  return product.some((x) => x.id === item.id);
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      if (isExist(state, action.payload)) {
        if (isExist.length <= 0) {
          return state;
        } else {
          return [
            ...state.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    cartQuantity: item.cartQuantity + 1,
                    lws_inputQuantity: item.lws_inputQuantity - 1,
                  }
                : item
            ),
          ];
        }
      } else {
        state.push({
          ...action.payload,
          cartQuantity: 1,
          lws_inputQuantity: action.payload.lws_inputQuantity - 1,
        });
        return state;
      }

    default:
      return state;
  }
};
export default cartReducer;
