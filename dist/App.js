"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _LoginPage = _interopRequireDefault(require("./Pages/Login/LoginPage"));
var _Register = _interopRequireDefault(require("./Pages/Register/Register"));
var _OTP = _interopRequireDefault(require("./Pages/OTP/OTP"));
var _ForgetPassword = _interopRequireDefault(require("./Pages/ForgetPassword/ForgetPassword"));
var _Navbar = _interopRequireDefault(require("./Components/Navbar/Navbar"));
var _UserIsLoginProvider = _interopRequireDefault(require("./Context/UserIsLoginProvider"));
var _reactHotToast = require("react-hot-toast");
var _ResetPassword = _interopRequireDefault(require("./Pages/ForgetPassword/ResetPassword"));
var _PrivateRoute = _interopRequireDefault(require("./PrivateRoute"));
var _FooterComponent = _interopRequireDefault(require("./Components/Footer/FooterComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//c
function App() {
  var toastOptions = {
    duration: 4000 // 5 seconds in milliseconds
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHotToast.Toaster, {
    toastOptions: toastOptions
  }), /*#__PURE__*/React.createElement(_UserIsLoginProvider["default"], null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-[#121212]"
  }, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "login",
    element: /*#__PURE__*/React.createElement(_LoginPage["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "forget-password",
    element: /*#__PURE__*/React.createElement(_ForgetPassword["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "register",
    element: /*#__PURE__*/React.createElement(_Register["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "otp-verification",
    element: /*#__PURE__*/React.createElement(_PrivateRoute["default"], null, /*#__PURE__*/React.createElement(_OTP["default"], null))
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "auth-pass-change/:token",
    element: /*#__PURE__*/React.createElement(_ResetPassword["default"], null)
  })), /*#__PURE__*/React.createElement(_FooterComponent["default"], null))));
}
var _default = exports["default"] = App;