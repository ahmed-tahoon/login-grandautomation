"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = void 0;
var isAuthenticated = exports.isAuthenticated = function isAuthenticated() {
  var auth = JSON.parse(localStorage.getItem("auth"));
  return auth && auth.token ? true : false;
};