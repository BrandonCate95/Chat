'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

exports.default = [{
    path: "/",
    render: function render(props) {
        return _react2.default.createElement(LoadableHome, props);
    },
    exact: true
}, {
    path: "/About",
    render: function render(props) {
        return _react2.default.createElement(LoadableAbout, props);
    },
    exact: true
}, {
    path: "/Contact",
    render: function render(props) {
        return _react2.default.createElement(LoadableContact, props);
    },
    exact: true
}];