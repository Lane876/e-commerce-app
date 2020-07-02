import {
  USER_SING_IN_FAIL,
  USER_SING_IN_SUCCESS,
  USER_SING_IN_REQUEST,
} from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SING_IN_REQUEST:
      return { loading: true };

    case USER_SING_IN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SING_IN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { userSigninReducer };
