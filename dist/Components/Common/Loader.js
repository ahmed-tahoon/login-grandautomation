"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoaderSpinner = require("react-loader-spinner");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Loader = function Loader(_ref) {
  var visible = _ref.visible;
  (0, _react.useEffect)(function () {
    if (visible) {
      setTimeout(function () {
        document.body.classList.remove("overflow-hidden");
      }, 3000);
    }
  }, [visible]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 z-50 transition-opacity ".concat(visible ? "opacity-100" : "opacity-0 pointer-events-none")
  }, /*#__PURE__*/_react["default"].createElement(_reactLoaderSpinner.ThreeDots, {
    color: "#000000",
    height: 50,
    width: 50
  }));
};
var _default = exports["default"] = Loader;