"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Auth = require("./Helper/Auth");
var _userService = _interopRequireDefault(require("./Services/userService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// useNavigate

var PrivateRoute = function PrivateRoute(_ref) {
  var children = _ref.children;
  var navigate = (0, _reactRouterDom.useNavigate)(); // Import useNavigate hook

  (0, _react.useEffect)(function () {
    if (!(0, _Auth.isAuthenticated)()) {
      navigate("/login"); // Navigate to login page if not authenticated
    }
    if ((0, _Auth.isAuthenticated)()) {
      // get user data
      _userService["default"].getUserData().then(function (res) {
        if (res.success && res.data.email_verified_at === null) {
          navigate("/otp-verification"); // Navigate to OTP verification if email not verified
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, [navigate]); // Include navigate in dependency array

  return (0, _Auth.isAuthenticated)() ? children : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
    to: "/login"
  });
};
var _default = exports["default"] = PrivateRoute;