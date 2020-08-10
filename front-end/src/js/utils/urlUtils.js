"use es6";

export const getRootUrl = () =>
  process.env.NODE_ENV === "production"
    ? "https://reactnode-weather-app.herokuapp.com/"
    : process.env.REACT_APP_DEV_API_URL;

export const ROOT_POINT = getRootUrl();
