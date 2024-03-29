"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = require("./Header");
require("./page.css");
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _md = require("react-icons/md");
var _Frame = _interopRequireDefault(require("../images/ProductsLogo/DarkBg/Frame.svg"));
var _reactRouterDom = require("react-router-dom");
var _authService = _interopRequireDefault(require("../Services/authService"));
var _ButtonLoader = _interopRequireDefault(require("../Components/Common/ButtonLoader"));
var _reactHotToast = require("react-hot-toast");
var _userService = _interopRequireDefault(require("../Services/userService"));
require("../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Page = exports.Page = function Page() {
  var _React$useState = _react["default"].useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    user = _React$useState2[0],
    setUser = _React$useState2[1];
  (0, _react.useEffect)(function () {
    document.title = "Grand Automation | Login";
  }, []);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var formik = (0, _formik.useFormik)({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('this is an inavlid email').required('Please Enter Your Email'),
      password: Yup.string().required('Please Enter Your password')
    })
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate__fadeIn animate__animated animate__faster text-white h-full flex flex-col justify-center items-center md:px-0 px-5 bg-[#121212]"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sm:flex-row flex-col-reverse justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:me-44 me-28"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:text-xl text-base font-semibold mb-1"
  }, "LOGIN"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm font-extralight"
  }, "One account for all our products")), /*#__PURE__*/_react["default"].createElement("img", {
    src: _Frame["default"],
    alt: "",
    className: "md:w-40 w-28 sm:mb-0 mb-10"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full mt-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium leading-6 me-1"
  }, "Email Address"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-[#ff0000]"
  }, "*")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    className: false ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2" : "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6",
    placeholder: "Enter Your Email"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium leading-6 me-1"
  }, "Password"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-[#ff0000]"
  }, "*")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    className: false ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2" : "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6",
    placeholder: "Enter Password Here"
  }))))));
};