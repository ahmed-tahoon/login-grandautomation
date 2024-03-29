"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _flowbiteReact = require("flowbite-react");
var _Logos = _interopRequireDefault(require("../../images/Logos02.png"));
var _Logo = _interopRequireDefault(require("../../images/Logo01.png"));
var _reactRouterDom = require("react-router-dom");
var _UserMenu = _interopRequireDefault(require("../../Icons/User Menu.svg"));
var _iconParkOutline_applicationMenu = _interopRequireDefault(require("../../Icons/icon-park-outline_application-menu.svg"));
var _radixIcons_externalLink = _interopRequireDefault(require("../../Icons/radix-icons_external-link.svg"));
var _react2 = require("@headlessui/react");
require("animate.css");
var _UserIsLoginProvider = require("../../Context/UserIsLoginProvider");
var _Popover = _interopRequireDefault(require("@mui/material/Popover"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _TransferWhiteBg = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/TransferWhiteBg.svg"));
var _calenderWhiteBg = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/calenderWhiteBg.svg"));
var _Property1GForm = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Form.svg"));
var _Property1GWorkflow = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Workflow.svg"));
var _Property1GSupportTick = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Support Tick.svg"));
var _Property1GHRM = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-HRM.svg"));
var _Property1GSignature = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Signature.svg"));
var _Property1GAccounting = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Accounting.svg"));
var _Property1GProjects = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Projects.svg"));
var _Property1GForms = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Forms.svg"));
var _Property1GInventory = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Inventory.svg"));
var _Property1GVideoConference = _interopRequireDefault(require("../../images/ProductsLogo/whiteBG/Property 1=G-Video Conference.svg"));
var _settingsIcon = _interopRequireDefault(require("../../Icons/settings icon.svg"));
var _logoutIcon = _interopRequireDefault(require("../../Icons/logout icon.svg"));
var _reactHotToast = require("react-hot-toast");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Import products images
// import icons
function NavbarComponent() {
  // products logos
  var products = [_TransferWhiteBg["default"], _calenderWhiteBg["default"], _Property1GForm["default"], _Property1GWorkflow["default"], _Property1GSupportTick["default"], _Property1GHRM["default"], _Property1GSignature["default"], _Property1GAccounting["default"], _Property1GProjects["default"], _Property1GForms["default"], _Property1GInventory["default"], _Property1GVideoConference["default"]];
  var _useContext = (0, _react.useContext)(_UserIsLoginProvider.userIsLoginContext),
    authData = _useContext.authData,
    setAuthData = _useContext.setAuthData;
  console.log(authData);

  // offcanvas
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];

  // dropDown Menu
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  var openDropdown = Boolean(anchorEl);
  var id = openDropdown ? 'simple-popover' : undefined;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var RemoveToken = function RemoveToken() {
    localStorage.removeItem('auth');
    setAuthData(null);
    _reactHotToast.toast.success("You 're now logged out. See you soon");
    navigate('/');
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-[#121212] border-b border-[#2a2a2a] px-0"
  }, /*#__PURE__*/_react["default"].createElement(_flowbiteReact.Navbar, {
    className: "bg-[#121212] py-5 px-0 m-0 w-11/12"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Logos["default"],
    className: " h-7 sm:h-6",
    alt: "Flowbite React Logo"
  })), /*#__PURE__*/_react["default"].createElement(_flowbiteReact.Navbar.Toggle, {
    className: "flex"
  }), /*#__PURE__*/_react["default"].createElement(_flowbiteReact.Navbar.Collapse, {
    className: "m-0"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: " https://support.grandautomation.io/login",
    className: "text-white font-normal flex items-center",
    target: "_blank"
  }, "SUPPORT", /*#__PURE__*/_react["default"].createElement("img", {
    src: _radixIcons_externalLink["default"],
    alt: "",
    className: "ms-3 mt-0.5"
  })), !authData ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login",
    className: "text-white font-normal flex items-center"
  }, "LOGIN"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/register",
    className: "text-white font-normal flex items-center"
  }, "SIGN UP")) : /*#__PURE__*/_react["default"].createElement("img", {
    src: authData !== null && authData !== void 0 && authData.profile_photo_url ? authData === null || authData === void 0 ? void 0 : authData.profile_photo_url : _UserMenu["default"],
    alt: "",
    "aria-haspopup": "true",
    onClick: handleClick,
    className: "cursor-pointer rounded-full object-cover w-7 h-7"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _iconParkOutline_applicationMenu["default"],
    alt: "",
    className: "ms-3",
    id: "fade-button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }))))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    id: id,
    open: openDropdown,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    sx: {
      marginTop: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: " text-sm p-4"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/Account-Setting",
    className: "flex pe-6 mb-5",
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _settingsIcon["default"],
    alt: "",
    className: "me-3"
  }), /*#__PURE__*/_react["default"].createElement("h6", null, "Account Settings")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex cursor-pointer",
    onClick: function onClick() {
      RemoveToken();
      handleClose();
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _logoutIcon["default"],
    alt: "",
    className: "me-3"
  }), /*#__PURE__*/_react["default"].createElement("h6", null, "Logout")))))), /*#__PURE__*/_react["default"].createElement(_react2.Transition.Root, {
    show: open,
    as: _react.Fragment
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: setOpen
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: open ? "absolute inset-0 animate-opacityAnimation-start overflow-hidden" : "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Panel, {
    className: "pointer-events-auto offcanvansWidth"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex h-full flex-col overflow-auto bg-white py-7 shadow-xl rounded-l-3xl"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex-1 px-10 flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Logo["default"],
    alt: "",
    width: 90
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-2 my-7"
  }, products.map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      key: index,
      src: product,
      className: index === 0 ? 'cursor-pointer' : ''
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4 font-[350]"
  }, "We try to provide a unique experience to meet your business needs. So feel free to contact us to hear suggestions"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-black text-white font-semibold w-full text-center rounded-md py-2"
  }, "Contact Us"))))))))))));
}
var _default = exports["default"] = NavbarComponent;