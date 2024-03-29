"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Auth = require("./Helper/Auth");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PublicRoute = function PublicRoute(_ref) {
  var path = _ref.path,
    element = _ref.element;
  (0, _react.useEffect)(function () {
    if ((0, _Auth.isAuthenticated)() && (path === "/login" || path === "/forget-password" || path === "/register")) {
      window.location.href = "/"; // Redirect to home if already authenticated and trying to access login, forget password, or register pages
    }
  }, [path]);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: path,
    element: !(0, _Auth.isAuthenticated)() ? element : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: "/"
    })
  });
};
var _default = exports["default"] = PublicRoute;