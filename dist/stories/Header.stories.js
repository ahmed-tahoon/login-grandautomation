"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LoggedOut = exports.LoggedIn = void 0;
var _Header = require("./Header");
var _test = require("@storybook/test");
var _default = exports["default"] = {
  title: 'Example/Header',
  component: _Header.Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: (0, _test.fn)(),
    onLogout: (0, _test.fn)(),
    onCreateAccount: (0, _test.fn)()
  }
};
var LoggedIn = exports.LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};
var LoggedOut = exports.LoggedOut = {};