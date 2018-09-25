'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
    var children = _ref.children,
        createdAt = _ref.createdAt,
        username = _ref.username;
    return _react2.default.createElement(
        'div',
        { style: { backgroundColor: 'rgba(220,255,255,0.8)', border: '1px solid lightgrey', borderRadius: '5px', margin: '10px 0', padding: '6px 7px 3px 11px', boxShadow: '1px 2px 2px #888888' } },
        _react2.default.createElement(
            'div',
            { style: { textAlign: 'start', fontWeight: 'bold', color: 'lightcoral' } },
            username
        ),
        _react2.default.createElement(
            'div',
            { style: { textAlign: 'start', fontSize: '16px', marginTop: '2px', paddingLeft: '5px' } },
            children
        ),
        _react2.default.createElement(
            'div',
            { style: { textAlign: 'end', fontSize: '10px', color: 'grey' } },
            createdAt
        )
    );
};

exports.default = Message;