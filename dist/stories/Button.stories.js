"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _test = require("@storybook/test");
var _Button = require("./Button");
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
var _default = exports["default"] = {
  title: 'Example/Button',
  component: _Button.Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: (0, _test.fn)()
  }
}; // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
var Primary = exports.Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
};
var Secondary = exports.Secondary = {
  args: {
    label: 'Button'
  }
};
var Large = exports.Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
};
var Small = exports.Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
};