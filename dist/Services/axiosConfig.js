"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _config = require("../config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Adjust the import path based on your project structure

// Set base URL for Axios
_axios["default"].defaults.baseURL = _config.apiConfig.APP_STAGING_URL;
// add token to header
// Assuming you have already imported Axios and set up your Axios instance

// Get the token from localStorage
var authData = JSON.parse(localStorage.getItem('auth'));
var token = authData ? authData.token : null;

// Set the Authorization header for Axios requests
_axios["default"].defaults.headers.common["Authorization"] = token ? "Bearer ".concat(token) : null;

// Add a request interceptor
_axios["default"].interceptors.request.use(function (config) {
  // Do something before request is sent
  var token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer ".concat(token);
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
_axios["default"].interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
var _default = exports["default"] = _axios["default"];