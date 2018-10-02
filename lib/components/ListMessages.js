'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Query = require('react-apollo/Query');

var _Query2 = _interopRequireDefault(_Query);

var _ListMessages = require('../queries/ListMessages');

var _ListMessages2 = _interopRequireDefault(_ListMessages);

var _newMessage = require('../subscriptions/newMessage');

var _newMessage2 = _interopRequireDefault(_newMessage);

var _MessagesContainer = require('./MessagesContainer');

var _MessagesContainer2 = _interopRequireDefault(_MessagesContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ListMessages = function ListMessages() {
  return _react2.default.createElement(
    _Query2.default,
    {
      query: _ListMessages2.default,
      variables: { conversation: "main", count: 8 },
      ssr: true
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data,
          subscribeToMore = _ref.subscribeToMore,
          _fetchMore = _ref.fetchMore,
          networkStatus = _ref.networkStatus;

      if (loading) return "Loading..."; // only have loading state if ssr set to false, otherwise will have flash of 'loading...'
      if (error) return 'Error! ' + error.message;

      return _react2.default.createElement(_MessagesContainer2.default, {
        messages: data.listMessages.messages,
        networkStatus: networkStatus,
        nextToken: data.listMessages.nextToken,
        fetchMore: function fetchMore(nextToken) {
          return _fetchMore({
            variables: {
              conversation: 'main',
              count: 8,
              nextToken: nextToken
            },
            updateQuery: function updateQuery(prev, _ref2) {
              var fetchMoreResult = _ref2.fetchMoreResult;

              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                listMessages: {
                  messages: [].concat(_toConsumableArray(prev.listMessages.messages), _toConsumableArray(fetchMoreResult.listMessages.messages)),
                  nextToken: fetchMoreResult.listMessages.nextToken,
                  __typename: 'PaginatedMessages'
                }
              });
            }
          });
        },
        subscribeToNewMessages: function subscribeToNewMessages() {
          return subscribeToMore({
            document: _newMessage2.default,
            variables: { conversation: "main" },
            updateQuery: function updateQuery(prev, _ref3) {
              var subscriptionData = _ref3.subscriptionData;

              if (!subscriptionData.data) return prev;
              var newFeedItem = subscriptionData.data.newMessage;

              return Object.assign({}, prev, {
                listMessages: {
                  messages: [newFeedItem].concat(_toConsumableArray(prev.listMessages.messages)),
                  nextToken: prev.listMessages.nextToken,
                  __typename: 'PaginatedMessages'
                }
              });
            }
          });
        }
      });
    }
  );
};

var _default = ListMessages;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListMessages, 'ListMessages', 'src/components/ListMessages.js');
  reactHotLoader.register(_default, 'default', 'src/components/ListMessages.js');
  leaveModule(module);
})();

;