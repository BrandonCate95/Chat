'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LoadableButton = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../mdc/Button'));
        });
    },
    modules: ['../mdc/Button'],
    webpack: function webpack() {
        return [require.resolveWeak('../mdc/Button')];
    },
    loading: _Loading2.default
});

var About = function About() {
    return _react2.default.createElement(
        'div',
        null,
        'This page will explain exactly what this web app does. This is the about page: about me!',
        _react2.default.createElement(
            LoadableButton,
            null,
            'Hello!'
        )
    );
};

exports.default = About;