import {
  USER_SING_IN_REQUEST,
  USER_SING_IN_SUCCESS,
  USER_SING_IN_FAIL,
} from "../constants/userConstants";
import Cookie from "js-cookie";
const { default: Axios } = require("axios");

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SING_IN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SING_IN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SING_IN_FAIL, payload: error.message });
  }
};

export { signin };
