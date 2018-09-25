'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Example;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LoadableNested = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./ExampleNested'));
    });
  },
  modules: ['./ExampleNested'],
  webpack: function webpack() {
    return [require.resolveWeak('./ExampleNested')];
  },
  loading: _Loading2.default
});

function Example() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Hello from a loadable component'
    ),
    _react2.default.createElement(LoadableNested, null)
  );
}