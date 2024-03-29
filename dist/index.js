"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capitalize = void 0;
var Capitalize = exports.Capitalize = function Capitalize(_ref) {
  var str = _ref.str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};