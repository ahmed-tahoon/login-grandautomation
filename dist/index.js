"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capitalize = void 0;
var Capitalize = exports.Capitalize = function Capitalize(_ref) {
  var str = _ref.str;
  return /*#__PURE__*/React.createElement("h1", null, str.charAt(0).toUpperCase() + str.slice(1));
};