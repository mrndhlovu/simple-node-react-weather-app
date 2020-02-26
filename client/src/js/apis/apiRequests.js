import axios from "axios";
import { ROOT_POINT } from "../utils/urlUtils";

export const userInfo = () => {
  return axios.get(ROOT_POINT);
};

export const requestForecast = query =>
  axios.get(`${ROOT_POINT}weather?${query}`);
