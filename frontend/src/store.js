import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productListReducer } from "./reducer/productReducers";
import thunk from "redux-thunk";

const initialStore = {};

const reducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(
  reducer,
  initialStore,
  compose(applyMiddleware(thunk))
);
export default store;
