'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var About = function About() {
    return _react2.default.createElement(
        'div',
        null,
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

var _default = About;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(About, 'About', 'src/pages/About.js');
    reactHotLoader.register(_default, 'default', 'src/pages/About.js');
    leaveModule(module);
})();

;