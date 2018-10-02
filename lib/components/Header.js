'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MoreMenu = require('./MoreMenu');

var _MoreMenu2 = _interopRequireDefault(_MoreMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

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
                { style: { marginTop: '4px' } },
                _react2.default.createElement(_MoreMenu2.default, null),
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
                { style: { textAlign: 'center', fontSize: 'calc(1.7vh + 1.7vw)' } },
                'Welcome ',
                username
            )
        )
    );
};

var _default = Header;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(linkStyle, 'linkStyle', 'src/components/Header.js');
    reactHotLoader.register(Header, 'Header', 'src/components/Header.js');
    reactHotLoader.register(_default, 'default', 'src/components/Header.js');
    leaveModule(module);
})();

;