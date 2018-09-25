'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _textfield = require('@material/textfield');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LoadableCreateMessageButton = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../components/CreateMessageBtn'));
        });
    },
    modules: ['../components/CreateMessageBtn'],
    webpack: function webpack() {
        return [require.resolveWeak('../components/CreateMessageBtn')];
    },
    loading: _Loading2.default
});

var style = {
    width: "100%",
    resize: "none",
    border: "none",
    outline: "none",
    padding: "32px 55px 16px 23px",
    margin: "0"
};

var TextArea = function (_React$Component) {
    _inherits(TextArea, _React$Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            focused: false
        }, _this.textareaRipple = null, _this.textareaContainerRef = null, _this.textareaRef = null, _this.labelRef = null, _this.componentDidMount = function () {
            if (!_this.props.icon) {
                // return import(/* webpackChunkName: "textfield" */ '@material/textfield').then(({MDCTextField}) => {
                _this.textareaRipple = new _textfield.MDCTextField(_this.textareaContainerRef);
                // })
            }
            var textarea = _this.textareaRef;
            textarea.style.height = textarea.scrollHeight;
            textarea.style.overflowY = "hidden";
            textarea.addEventListener("input", _this.OnInput, false);
        }, _this.componentWillUnmount = function () {
            if (!_this.props.icon) {
                _this.textareaRipple.destroy();
            }
        }, _this.restoreLabel = function () {
            _this.labelRef.classList.remove('mdc-floating-label--float-above');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TextArea, [{
        key: 'OnInput',
        value: function OnInput() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this,
                _ref2;

            var _props = this.props,
                content = _props.content,
                handleChange = _props.handleChange,
                user = _props.user,
                clearMessage = _props.clearMessage;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    {
                        ref: function ref(textarea) {
                            return _this2.textareaContainerRef = textarea;
                        },
                        className: 'mdc-text-field mdc-text-field--textarea',
                        style: (_ref2 = { display: 'flex' }, _defineProperty(_ref2, 'display', 'flex'), _defineProperty(_ref2, 'margin', '8px 0'), _defineProperty(_ref2, 'position', 'relative'), _defineProperty(_ref2, 'bottom', '0'), _defineProperty(_ref2, 'width', '100%'), _defineProperty(_ref2, 'backgroundColor', 'white'), _defineProperty(_ref2, 'boxShadow', '0 1px 3px 1px grey'), _ref2)
                    },
                    _react2.default.createElement('textarea', {
                        id: 'textarea',
                        ref: function ref(textarea) {
                            return _this2.textareaRef = textarea;
                        },
                        className: 'mdc-text-field__input',
                        rows: '1',
                        style: style,
                        onChange: handleChange,
                        onFocus: function onFocus() {
                            return _this2.setState({ focused: true });
                        },
                        onBlur: function onBlur() {
                            return _this2.setState({ focused: false });
                        },
                        value: content
                    }),
                    _react2.default.createElement(LoadableCreateMessageButton, {
                        message: content,
                        user: user,
                        clearMessage: clearMessage,
                        restoreLabel: this.restoreLabel.bind(this)
                    }),
                    _react2.default.createElement(
                        'label',
                        {
                            ref: function ref(label) {
                                return _this2.labelRef = label;
                            },
                            htmlFor: 'textarea',
                            className: 'mdc-floating-label',
                            style: { background: 'none' }
                        },
                        this.state.focused && user,
                        !this.state.focused && 'Write...'
                    )
                )
            );
        }
    }]);

    return TextArea;
}(_react2.default.Component);

exports.default = TextArea;