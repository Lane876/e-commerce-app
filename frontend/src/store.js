import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducer/productReducers";
import { cartReducer } from "./reducer/cartReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userSigninReducer } from "./reducer/userReducers";

const cartItems = Cookie.getJSON("cartItems" || []);

const initialStore = { cart: { cartItems } };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});

const store = createStore(
  reducer,
  initialStore,
  compose(applyMiddleware(thunk))
);
export default store;
