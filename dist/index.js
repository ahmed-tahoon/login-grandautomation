"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capitalize = void 0;
Object.defineProperty(exports, "Capti", {
  enumerable: true,
  get: function get() {
    return _Capti["default"];
  }
});
var _Capti = _interopRequireDefault(require("./Capti"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Capitalize = exports.Capitalize = function Capitalize(_ref) {
  var str = _ref.str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};