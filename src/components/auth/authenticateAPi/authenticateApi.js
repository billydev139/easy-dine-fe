import Axios from "axios";
import { BASE_URL } from "../../../utils/baseUrl";


const axios = Axios.create({
  baseURL: BASE_URL,
});
export default axios;
axios.interceptors.request.use(
  async (config) => {
   
     const token = localStorage.getItem("accessToken");
 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
