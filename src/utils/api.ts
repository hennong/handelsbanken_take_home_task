import Axios from "axios";
import Qs from "qs";

const paramsSerializer = (params: { [key: string]: unknown }) => {
  return Qs.stringify(params);
};

export const api = Axios.create({
  withCredentials: false,
  baseURL: "https://api.met.no/weatherapi",
  paramsSerializer,
});
