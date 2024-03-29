import axios from "axios";
import { apiConfig } from "../config"; // Adjust the import path based on your project structure

// Set base URL for Axios
axios.defaults.baseURL = apiConfig.APP_STAGING_URL;
// add token to header
// Assuming you have already imported Axios and set up your Axios instance

// Get the token from localStorage
const authData = JSON.parse(localStorage.getItem('auth'));
const token = authData ? authData.token : null;

// Set the Authorization header for Axios requests
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
