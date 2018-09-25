'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkStyle = {
    color: 'rgba(255,255,255,0.9)',
    marginLeft: '5px',
    fontSize: '16px',
    textTransform: 'uppercase',
    textAlign: 'center'
};

var Header = function Header(_ref) {
    var username = _ref.username;
    return _react2.default.createElement(
        'div',
        { style: { backgroundColor: '#489687', marginBottom: '8px', boxShadow: '0 1px 3px 1px grey', color: 'rgba(255,255,255,0.9' } },
        _react2.default.createElement(
            'div',
            { style: { display: 'flex', padding: '0 10px' } },
            _react2.default.createElement(
                _Link3.default,
                { to: '/', style: _defineProperty({
                        color: 'rgba(255,255,255,0.9)',
                        margin: '5px',
                        fontSize: '22px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        flex: 1
                    }, 'textAlign', 'start') },
                _react2.default.createElement('i', { className: 'fas fa-home' })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Link3.default,
                    { to: '/About', style: linkStyle },
                    'About'
                ),
                _react2.default.createElement(
                    _Link3.default,
                    { to: '/Contact', style: linkStyle },
                    'Contact'
                )
            )
        ),
        _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
                'h1',
                { style: { textAlign: 'center', fontSize: 'calc(1.3vh + 1.7vw)' } },
                'Welcome ',
                username
            )
        )
    );
};

exports.default = Header;