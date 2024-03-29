"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Frame = require("../../images/ProductsLogo/DarkBg/Frame.svg");
var _reactRouterDom = require("react-router-dom");
var _UserIsLoginProvider = require("../../Context/UserIsLoginProvider");
var _Loader = _interopRequireDefault(require("../../Components/Common/Loader"));
var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));
var _userService = _interopRequireDefault(require("../../Services/userService"));
var _ButtonLoader = _interopRequireDefault(require("../../Components/Common/ButtonLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function OTP() {
  var _useContext = (0, _react.useContext)(_UserIsLoginProvider.userIsLoginContext),
    authData = _useContext.authData,
    setAuthData = _useContext.setAuthData,
    setToken = _useContext.setToken;
  var nav = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    allDigitsFilled = _useState2[0],
    setAllDigitsFilled = _useState2[1]; // State to track if all digits are filled

  (0, _react.useEffect)(function () {
    document.title = 'Grand Automation | OTP';

    // Add paste event listener to the document body
    document.body.addEventListener('paste', handlePaste);
    return function () {
      document.body.removeEventListener('paste', handlePaste);
    };
  }, []);
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(59),
    _useState6 = _slicedToArray(_useState5, 2),
    timer = _useState6[0],
    setTimer = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    resending = _useState8[0],
    setResending = _useState8[1];
  var digit1Ref = (0, _react.useRef)(null);
  var digit2Ref = (0, _react.useRef)(null);
  var digit3Ref = (0, _react.useRef)(null);
  var digit4Ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!(authData !== null && authData !== void 0 && authData.email_verified_at)) {
      setLoading(false);
    } else {
      nav('/');
    }
  }, [authData, nav]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      if (timer > 0) {
        setTimer(function (prevTimer) {
          return prevTimer - 1;
        });
      } else {
        setResending(false);
        clearInterval(interval);
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [timer]);
  var getFirstName = function getFirstName(name) {
    if (!name) return 'loading...';
    return name.split(' ')[0];
  };
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    resendLoading = _useState10[0],
    setResendLoading = _useState10[1];
  var resendOtp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setResendLoading(true);
            _context.next = 3;
            return _userService["default"].resendOtp();
          case 3:
            response = _context.sent;
            if (response.success) {
              _reactHotToast["default"].success(response.message);
              setResendLoading(false);
              setResending(true);
              setTimer(59);
            } else {
              _reactHotToast["default"].error(response.error.message);
              setResendLoading(false);
            }

            // Additional logic to resend OTP
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function resendOtp() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleInputChange = function handleInputChange(e, ref) {
    var input = e.target;
    var maxLength = parseInt(input.getAttribute('maxlength'), 10);
    if (input.value.length >= maxLength && ref) {
      ref.current.focus();
    }

    // check if is digit 4 and all digits are filled call submit 
    if (input.name === 'digit4' && input.value.length === 1) {
      handleSubmit();
    }
  };
  var handlePaste = function handlePaste(e) {
    var pastedText = e.clipboardData.getData('text/plain');
    var otpRegex = /\b\d{4}\b/; // Regular expression to match 4-digit OTP

    if (otpRegex.test(pastedText)) {
      var otpDigits = pastedText.match(otpRegex)[0].split('');
      if (otpDigits.length === 4) {
        // Fill input fields with OTP digits
        digit1Ref.current.value = otpDigits[0];
        digit2Ref.current.value = otpDigits[1];
        digit3Ref.current.value = otpDigits[2];
        digit4Ref.current.value = otpDigits[3];

        // Automatically submit the form
        handleSubmit();
      }
    }
  };
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingSend = _useState12[0],
    setLoadingSend = _useState12[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var digit1, digit2, digit3, digit4, otp, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            digit1 = digit1Ref.current.value;
            digit2 = digit2Ref.current.value;
            digit3 = digit3Ref.current.value;
            digit4 = digit4Ref.current.value;
            setLoadingSend(true);
            if (!(!digit1 || !digit2 || !digit3 || !digit4)) {
              _context2.next = 10;
              break;
            }
            _reactHotToast["default"].error('Please enter OTP');
            setLoadingSend(false);
            return _context2.abrupt("return");
          case 10:
            otp = digit1 + digit2 + digit3 + digit4; // convert to number 
            _context2.next = 13;
            return _userService["default"].verifyEmail(otp);
          case 13:
            response = _context2.sent;
            if (response.success) {
              _reactHotToast["default"].success(response.message);
              setAuthData(function (prevData) {
                return _objectSpread(_objectSpread({}, prevData), {}, {
                  email_verified_at: new Date().toISOString()
                });
              });
              nav('/');
              setLoadingSend(false);
            } else {
              _reactHotToast["default"].error(response.error.message);
              setLoadingSend(false);
            }
            _context2.next = 22;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            _reactHotToast["default"].error(_context2.t0.message);
            setLoadingSend(false);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 17]]);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center text-white basis-11/12 py-10 px-5 px-md-0 bg-[#121212]"
  }, loading ? /*#__PURE__*/_react["default"].createElement(_Loader["default"], null) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-3xl"
  }, "Welcome! ", getFirstName(authData === null || authData === void 0 ? void 0 : authData.name)), /*#__PURE__*/_react["default"].createElement(_Frame.ReactComponent, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 font-thin text-[#b8b8b8]"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "Thank you for registering with our service! We are excited to have you as a ", /*#__PURE__*/_react["default"].createElement("br", null), " part of our community."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "To complete your registration, please enter the One-Time Password (OTP) ", /*#__PURE__*/_react["default"].createElement("br", null), " that was sent to your email address :", '  ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-semibold"
  }, authData === null || authData === void 0 ? void 0 : authData.email), " ", /*#__PURE__*/_react["default"].createElement("br", null), "This is an important step in verifying your account and ensuring its security."), /*#__PURE__*/_react["default"].createElement("p", null, "If you did not receive the OTP within an hour, please click on resend OTP to ", /*#__PURE__*/_react["default"].createElement("br", null), " request a new one."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-4"
  }, "Thank you for choosing our service. We look forward to serving you!")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-4 my-6 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "digit1",
    id: "digit1",
    maxLength: "1",
    ref: digit1Ref,
    onInput: function onInput(e) {
      return handleInputChange(e, digit2Ref);
    },
    className: "block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 py-3 ring-[#E5E7EB1A] text-center"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "digit2",
    id: "digit2",
    maxLength: "1",
    ref: digit2Ref,
    onInput: function onInput(e) {
      return handleInputChange(e, digit3Ref);
    },
    className: "block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "digit3",
    id: "digit3",
    maxLength: "1",
    ref: digit3Ref,
    onInput: function onInput(e) {
      return handleInputChange(e, digit4Ref);
    },
    className: "block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "digit4",
    id: "digit4",
    maxLength: "1",
    ref: digit4Ref,
    onInput: function onInput(e) {
      return handleInputChange(e, null);
    } // No need to move to next input after the fourth digit
    ,
    className: "block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
  })), /*#__PURE__*/_react["default"].createElement(_ButtonLoader["default"], {
    data: true,
    functionToCall: handleSubmit,
    loading: loadingSend,
    text: "Sign Up"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-5 flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-[#4C4C4C]"
  }, "Didn't receive a code", ' ', /*#__PURE__*/_react["default"].createElement("button", {
    to: "",
    className: "font-medium ".concat(resending || resendLoading ? 'text-gray-500' : 'text-white', " underline ms-2 ").concat(resending || resendLoading ? '' : 'cursor-pointer'),
    onClick: resendOtp,
    disabled: resending || resendLoading
  }, resending ? "Resending OTP in ".concat(timer, " seconds") : resendLoading ? 'Resending...' : 'Resend OTP')))));
}
var _default = exports["default"] = OTP;