import { authFailed } from "./actionCreators";
import * as actionTypes from "./actionTypes";

const INITAL_STATE = {
  token: null,
  userId: null,
  authFailedMsg: "",
};

export const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        authFailedMsg: null,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        authFailedMsg: action.payload,
      };
    default:
      return state;
  }
};
