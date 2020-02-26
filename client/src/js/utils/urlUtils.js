"use es6";

export const getRootUrl = () =>
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : process.env.REACT_APP_DEV_API_URL;

export const ROOT_POINT = getRootUrl();

export const authQueryParams = {
  headers: {
    Authorization: ``,
    "Content-Type": "application/json"
  }
};
