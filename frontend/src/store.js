import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducer/productReducers";
import thunk from "redux-thunk";

const initialStore = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const store = createStore(
  reducer,
  initialStore,
  compose(applyMiddleware(thunk))
);
export default store;
