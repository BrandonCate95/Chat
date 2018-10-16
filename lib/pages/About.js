'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                'title',
                null,
                'About'
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            'This app was started as a project to test out server side rendering. It currently achieves this by using react apollo, react loadable, and react router.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            null,
            'The app also uses a custom webpack configuration for optimal control and speed. You can view both the server side rendering and the effects of the webpack configuration best through the network tab in the developer tools.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            null,
            'The last smaller part of the app is the real time messaging using graphQL subscriptions. You can view this by either opening up two tabs or using two devices and sending a few messages.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'div',
            null,
            'This app is hosted on a small server in ohio using aws elasticbeanstalk.'
        )
    );
};

exports.default = About;