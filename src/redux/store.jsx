import { createStore } from "redux";
import productReducer from "./products/reducer";
import cartReducer from "../redux/cart/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
