'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Switch2 = require('react-router-dom/Switch');

var _Switch3 = _interopRequireDefault(_Switch2);

var _Route2 = require('react-router-dom/Route');

var _Route3 = _interopRequireDefault(_Route2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
// import routes from './Routes'


var LoadableHome = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./pages/Home'));
        });
    },
    modules: ['./pages/Home'],
    webpack: function webpack() {
        return [require.resolveWeak('./pages/Home')];
    },
    loading: _Loading2.default
});

var LoadableAbout = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./pages/About'));
        });
    },
    modules: ['./pages/About'],
    webpack: function webpack() {
        return [require.resolveWeak('./pages/About')];
    },
    loading: _Loading2.default
});

var LoadableContact = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./pages/Contact'));
        });
    },
    modules: ['./pages/Contact'],
    webpack: function webpack() {
        return [require.resolveWeak('./pages/Contact')];
    },
    loading: _Loading2.default
});

var App = function App(_ref) {
    var _ref$username = _ref.username,
        username = _ref$username === undefined ? username || window.__USERNAME__ : _ref$username;
    return _react2.default.createElement(
        'div',
        { className: 'container', style: { height: '100vh' } },
        _react2.default.createElement(
            'div',
            { className: 'row justify-content-md-center', style: { height: '100vh' } },
            _react2.default.createElement(
                'div',
                { className: 'col col-md-8 col-lg-6 style_hello_QD-6bdgwEfj_w26Drodzd', style: { padding: '0', display: 'flex', flexDirection: 'column', maxHeight: '100vh', minHeight: '0' } },
                _react2.default.createElement(_Header2.default, {
                    username: username
                }),
                _react2.default.createElement(
                    _Switch3.default,
                    null,
                    _react2.default.createElement(_Route3.default, { exact: true, path: '/', render: function render(props) {
                            return _react2.default.createElement(LoadableHome, _extends({}, props, { username: username }));
                        } }),
                    _react2.default.createElement(_Route3.default, { exact: true, path: '/About', render: function render(props) {
                            return _react2.default.createElement(LoadableAbout, props);
                        } }),
                    _react2.default.createElement(_Route3.default, { exact: true, path: '/Contact', render: function render(props) {
                            return _react2.default.createElement(LoadableContact, props);
                        } })
                )
            )
        )
    );
};

exports.default = App;