'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return _react2.default.createElement(
        'div',
        null,
        'Loader timed out!'
      );
    } else if (props.pastDelay) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    } else {
      return null;
    }
  } else if (props.error) {
    return _react2.default.createElement(
      'div',
      null,
      'Error! Component failed to load'
    );
  } else {
    return null;
  }
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, 'Loading', 'src/components/Loading.js');
  leaveModule(module);
})();

;