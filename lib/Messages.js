'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Query = require('react-apollo/Query');

var _Query2 = _interopRequireDefault(_Query);

var _ListMessages = require('./queries/ListMessages');

var _ListMessages2 = _interopRequireDefault(_ListMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListMessages = function ListMessages() {
  return _react2.default.createElement(
    _Query2.default,
    {
      query: _ListMessages2.default,
      variables: { conversation: "main" },
      ssr: true
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data;

      if (loading) return "Loading..."; // only have loading state if ssr set to false, otherwise will have flash of 'loading...'
      if (error) return 'Error! ' + error.message;

      return _react2.default.createElement(
        'div',
        { style: { margin: '10px 0' } },
        data.listMessages.messages.map(function (message) {
          return _react2.default.createElement(
            'div',
            { key: message.createdAt },
            message.content
          );
        })
      );
    }
  );
};

exports.default = ListMessages;