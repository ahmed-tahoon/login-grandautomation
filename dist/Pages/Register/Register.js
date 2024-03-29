"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _md = require("react-icons/md");
var _reactPasswordChecklist = _interopRequireDefault(require("react-password-checklist"));
var _check = _interopRequireDefault(require("../../images/check (4).png"));
var _close = _interopRequireDefault(require("../../images/close (3).png"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _reactRouterDom = require("react-router-dom");
require("./style.css");
var _Frame = _interopRequireWildcard(require("../../images/ProductsLogo/DarkBg/Frame.svg"));
var _authService = _interopRequireDefault(require("../../Services/authService"));
var _reactHotToast = require("react-hot-toast");
var _ButtonLoader = _interopRequireDefault(require("../../Components/Common/ButtonLoader"));
var _UserIsLoginProvider = require("../../Context/UserIsLoginProvider");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Import eye icons
//useNavigate 
function Register() {
  var _useContext = (0, _react.useContext)(_UserIsLoginProvider.userIsLoginContext),
    authData = _useContext.authData,
    setAuthData = _useContext.setAuthData,
    setToken = _useContext.setToken;
  (0, _react.useEffect)(function () {
    document.title = "Grand Automation | Register";
  }, []);
  var navigate = (0, _reactRouterDom.useNavigate)();
  (0, _react.useEffect)(function () {
    if (authData) {
      navigate('/');
    }
  }, [authData]);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var handleChange = function handleChange(event) {
    setChecked(event.target.checked);
  };
  var initialValuesInput = {
    FullName: '',
    email: '',
    password: '',
    ComfirmPassword: ''
  };
  var nav = (0, _reactRouterDom.useNavigate)();
  var formik = (0, _formik.useFormik)({
    initialValues: initialValuesInput,
    validationSchema: Yup.object().shape({
      // valodation for max length of 32 for full name
      FullName: Yup.string().max(32, 'Full Name must be at most 32 characters').required('Please Enter Your Full Name'),
      email: Yup.string().email('Invalid email').required('Please Enter Your Email Address'),
      password: Yup.string().required('Please Enter Your Password'),
      ComfirmPassword: Yup.string().required('Please Repeat Your Password').oneOf([Yup.ref('password')], 'Passwords must match'),
      CompanyName: checked ? Yup.string().required("Please Enter Company's Name") : Yup.string(),
      Address: checked ? Yup.string().required("Please Enter company's Address") : Yup.string(),
      TAX_ID: checked ? Yup.number().required('Please Enter TAX ID') : Yup.number()
    }),
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values, _ref) {
        var resetForm, setSubmitting, sendData, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              resetForm = _ref.resetForm, setSubmitting = _ref.setSubmitting;
              _context.prev = 1;
              setLoading(true);
              sendData = {
                name: values.FullName,
                email: values.email,
                password: values.password,
                confirm_password: values.ComfirmPassword,
                is_company: checked,
                company_name: values.CompanyName,
                company_address: values.Address,
                company_tax_number: values.TAX_ID
              }; // Call the register method from the authService
              _context.next = 6;
              return _authService["default"].register(sendData);
            case 6:
              response = _context.sent;
              if (response.success) {
                _reactHotToast.toast.success('Registration Successful');
                setLoading(false);
                setToken(response.data);
                // add token 
                _axios["default"].defaults.headers.common["Authorization"] = response.data.token ? "Bearer ".concat(response.data.token) : null;
                localStorage.setItem('auth', JSON.stringify(response.data));
                nav('/otp-verification');
              }

              // Reset the form after successful submissions
              resetForm();
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setLoading(false);
              console.error('Error:', _context.t0);
            case 15:
              _context.prev = 15;
              // Set submitting state to false after submission
              setSubmitting(false);
              return _context.finish(15);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 11, 15, 18]]);
      }));
      function onSubmit(_x, _x2) {
        return _onSubmit.apply(this, arguments);
      }
      return onSubmit;
    }()
  });
  if (checked) {
    formik.initialValues.CompanyName = '';
    formik.initialValues.Address = '';
    formik.initialValues.TAX_ID = '';
  }
  var checkALLRequiredHasFill = function checkALLRequiredHasFill() {
    if (formik.values.FullName !== '' && formik.values.email !== '' && formik.values.password !== '' && formik.values.ComfirmPassword !== '') {
      if (checked) {
        if (formik.values.CompanyName !== '' && formik.values.Address !== '' && formik.values.TAX_ID !== '') {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPassword = _useState6[0],
    setShowPassword = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showConfirmPassword = _useState8[0],
    setShowConfirmPassword = _useState8[1];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate__fadeIn animate__animated animate__faster flex justify-center items-center text-white bg-[#121212] py-14 px-5 px-md-0"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sm:flex-row flex-col-reverse justify-between mb-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:me-64 sm:me-28 me-0"
  }, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "md:text-xl text-base font-semibold"
  }, "SIGNUP"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-light"
  }, "One account for all our products")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center md:justify-start"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Frame["default"],
    alt: "",
    className: "md:w-40 w-28 sm:mb-0 mb-10"
  }))), /*#__PURE__*/_react["default"].createElement("form", {
    className: "mt-6",
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "FullName",
    className: "block text-sm font-medium leading-6 me-1"
  }, "Full Name"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-[#ff0000]"
  }, "*")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "FullName",
    id: "FullName",
    className: formik.errors.FullName && formik.touched.FullName ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Enter Your Name Here",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), formik.errors.FullName && formik.touched.FullName && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  })), formik.errors.FullName && formik.touched.FullName ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#ff0000] text-sm"
  }, formik.errors.FullName) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
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
    className: formik.errors.email && formik.touched.email ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Enter Your Email",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), formik.errors.email && formik.touched.email && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5 "
  })), formik.errors.email && formik.touched.email ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#ff0000] text-sm"
  }, formik.errors.email) : null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-5 gap-4 mt-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
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
    type: showPassword ? 'text' : 'password' // Toggle between text and password type
    ,
    autoComplete: "current-password",
    className: formik.errors.password && formik.touched.password ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Enter Password Here",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), formik.errors.password && formik.touched.password && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  }), !showPassword ? /*#__PURE__*/_react["default"].createElement(_md.MdOutlineVisibilityOff, {
    className: "text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer",
    onClick: function onClick() {
      return setShowPassword(true);
    }
  }) : /*#__PURE__*/_react["default"].createElement(_md.MdOutlineVisibility, {
    className: "text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer",
    onClick: function onClick() {
      return setShowPassword(false);
    }
  })), formik.errors.password && formik.touched.password ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#f80000] text-sm"
  }, formik.errors.password) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "ComfirmPassword",
    className: "block text-sm font-medium leading-6 me-1"
  }, "Repeat password"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-[#ff0000]"
  }, "*")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "ComfirmPassword",
    name: "ComfirmPassword",
    type: showConfirmPassword ? 'text' : 'password' // Toggle between text and password type
    ,
    autoComplete: "current-password",
    className: formik.errors.ComfirmPassword && formik.touched.ComfirmPassword ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6 " : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Repeat Your Password Here",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  }), formik.errors.ComfirmPassword && formik.touched.ComfirmPassword && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  }), !showConfirmPassword ? /*#__PURE__*/_react["default"].createElement(_md.MdOutlineVisibilityOff, {
    className: "text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer",
    onClick: function onClick() {
      return setShowConfirmPassword(true);
    }
  }) : /*#__PURE__*/_react["default"].createElement(_md.MdOutlineVisibility, {
    className: "text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer",
    onClick: function onClick() {
      return setShowConfirmPassword(false);
    }
  })), formik.errors.ComfirmPassword && formik.touched.ComfirmPassword ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#f80000] text-sm"
  }, formik.errors.ComfirmPassword) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: " text-sm text-start md:items-center items-start md:pt-10 pt-0 flex flex-col justify-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement(_reactPasswordChecklist["default"], {
    rules: ["minLength", "specialChar", "number", "capital", "match"],
    minLength: 5,
    value: formik.values.password,
    valueAgain: formik.values.ComfirmPassword,
    onChange: function onChange(isValid) {},
    className: "",
    iconComponents: {
      ValidIcon: /*#__PURE__*/_react["default"].createElement("img", {
        src: _check["default"],
        width: 10,
        className: "me-3 mt-2"
      }),
      InvalidIcon: /*#__PURE__*/_react["default"].createElement("img", {
        src: _close["default"],
        width: 10,
        className: "me-3 mt-2"
      })
    }
  }))), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "border-[#252526] my-3"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    checked: checked,
    onChange: handleChange,
    inputProps: {
      'aria-label': 'controlled'
    },
    sx: {
      color: '#9fa6b2',
      '&.Mui-checked': {
        color: 'white'
      }
    },
    className: "ms-0"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "comments",
    className: "text-white ms-1 text-sm underline"
  }, "Registering as a company")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-3  mt-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "CompanyName",
    className: checked ? "text-white block text-sm font-medium leading-6 me-1" : "text-[#484848] block text-sm font-medium leading-6 me-1"
  }, "Company Name"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "CompanyName",
    id: "CompanyName",
    className: formik.errors.CompanyName && formik.touched.CompanyName && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Company Name",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    disabled: checked ? false : true
  }), formik.errors.CompanyName && formik.touched.CompanyName && checked && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  })), formik.errors.CompanyName && formik.touched.CompanyName && checked ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#ff0000] text-sm"
  }, formik.errors.CompanyName) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "Address",
    className: checked ? "text-white block text-sm font-medium leading-6 me-1" : "text-[#484848] block text-sm font-medium leading-6 me-1"
  }, "Address"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "Address",
    id: "Address",
    className: formik.errors.Address && formik.touched.Address && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "Address",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    disabled: checked ? false : true
  }), formik.errors.Address && formik.touched.Address && checked && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  })), formik.errors.Address && formik.touched.Address && checked ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#ff0000] text-sm"
  }, formik.errors.Address) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "CompanyName",
    className: checked ? "text-white block text-sm font-medium leading-6 me-1" : "text-[#484848] block text-sm font-medium leading-6 me-1"
  }, "TAX ID"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    name: "TAX_ID",
    id: "TAX_ID",
    className: formik.errors.TAX_ID && formik.touched.TAX_ID && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" : "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6",
    placeholder: "TAX ID",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    disabled: checked ? false : true
  }), formik.errors.TAX_ID && formik.touched.TAX_ID && checked && /*#__PURE__*/_react["default"].createElement(_md.MdOutlineErrorOutline, {
    className: "text-[#ff0000] text-xl absolute right-2.5 top-2.5"
  })), formik.errors.TAX_ID && formik.touched.TAX_ID && checked ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-[#ff0000] text-sm"
  }, formik.errors.TAX_ID) : null), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-[#4c4c4c] md:text-base text-sm font-semibold mt-4"
  }, "By registering you agree to the ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-extralight underline text-white ms-1"
  }, "Term and Conditions")), /*#__PURE__*/_react["default"].createElement(_ButtonLoader["default"], {
    data: checkALLRequiredHasFill,
    loading: loading,
    text: "Sign Up"
  }))));
}
var _default = exports["default"] = Register;