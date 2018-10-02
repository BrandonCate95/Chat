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

var Contact = function Contact() {
    return _react2.default.createElement(
        'div',
        null,
        'If you have any additional questions please contact me at:',
        _react2.default.createElement(
            'div',
            null,
            'brandoncate95@gmail.com'
        )
    );
};

var _default = Contact;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Contact, 'Contact', 'src/pages/Contact.js');
    reactHotLoader.register(_default, 'default', 'src/pages/Contact.js');
    leaveModule(module);
})();

;