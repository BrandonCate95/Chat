'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _CreateMessage = require('../mutations/CreateMessage');

var _CreateMessage2 = _interopRequireDefault(_CreateMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateMessageBtn = function CreateMessageBtn(_ref) {
    var message = _ref.message,
        user = _ref.user,
        clearMessage = _ref.clearMessage,
        restoreLabel = _ref.restoreLabel;
    return _react2.default.createElement(
        _reactApollo.Mutation,
        { mutation: _CreateMessage2.default },
        function (createMessage, _ref2) {
            var data = _ref2.data;
            return _react2.default.createElement(
                'button',
                {
                    title: 'send',
                    onClick: function onClick() {
                        createMessage({ variables: { conversation: 'main', content: message, username: user } });
                        clearMessage();
                        restoreLabel();
                    },
                    style: { zIndex: '1', background: 'none', border: '1px solid lightblue', color: 'rgb(0,180,255)', borderRadius: '50%', padding: '5px 10px 5px 8px', cursor: 'pointer', boxShadow: '1px 1px 5px 0px grey', position: 'absolute', top: '15px', right: '15px', outline: 'none' }
                },
                _react2.default.createElement('i', { className: 'fas fa-paper-plane' })
            );
        }
    );
};

exports.default = CreateMessageBtn;