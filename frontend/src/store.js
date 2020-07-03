import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
} from "./reducer/productReducers";
import { cartReducer } from "./reducer/cartReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userSigninReducer, userRegisterReducer } from "./reducer/userReducers";

const cartItems = Cookie.getJSON("cartItems" || []);
const userInfo = Cookie.getJSON("userInfo" || null);

const initialStore = { cart: { cartItems }, userSignin: { userInfo } };

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
});

const store = createStore(
  reducer,
  initialStore,
  compose(applyMiddleware(thunk))
);
export default store;
