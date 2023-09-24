import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products/productReducer";
import { createStore } from "redux";

const store = createStore(productReducer, composeWithDevTools());
export default store;
