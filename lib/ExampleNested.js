'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExampleNested;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExampleNested() {
  return _react2.default.createElement(
    'p',
    null,
    'Hello from a nested loadable component!'
  );
}