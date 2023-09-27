import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products/productReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./cart/cartReducer";
import { ADD_CART } from "./cart/actionTypes";
import { removeProductQuantity } from "./products/action";

const rootRducer = combineReducers({
  productReducer,
  cartReducer,
});

const productManage = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_CART:
      store.dispatch(removeProductQuantity(action.payload.id));
      return next(action);

    default:
      return next(action);
  }
};

const middleware = applyMiddleware(productManage);

const enhance = composeWithDevTools(middleware);

const store = createStore(rootRducer, enhance);
export default store;
