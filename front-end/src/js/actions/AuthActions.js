"use es6";

import { INITIALIZE_AUTH } from "./ActionTypes";
import { userInfo } from "../apis/apiRequests";
import { makeRequest } from "./index";

export const getAuth = () => {
  return dispatch => {
    dispatch(makeRequest(INITIALIZE_AUTH));
    userInfo().then(
      response => {},
      error => {}
    );
  };
};
