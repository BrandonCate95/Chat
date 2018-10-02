'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessagesContainer = function (_React$Component) {
    _inherits(MessagesContainer, _React$Component);

    function MessagesContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MessagesContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessagesContainer.__proto__ || Object.getPrototypeOf(MessagesContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            atBottom: false
        }, _this.componentDidMount = function () {
            _this.props.subscribeToNewMessages();
        }, _this.handleScroll = function (e) {
            var el = e.target;
            if (el.offsetHeight + el.scrollTop >= el.scrollHeight - 100 && _this.props.networkStatus !== 3 && _this.state.atBottom === false) {
                _this.setState({ atBottom: true });
                if (_this.props.nextToken) _this.props.fetchMore(_this.props.nextToken);
            } else if (el.offsetHeight + el.scrollTop <= el.scrollHeight - 100 && _this.props.networkStatus !== 3 && _this.state.atBottom === true) {
                _this.setState({ atBottom: false });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MessagesContainer, [{
        key: 'render',
        value: function render() {
            var messages = this.props.messages;

            return _react2.default.createElement(
                'div',
                {
                    onScroll: this.handleScroll,
                    style: { flex: '30', padding: '0 10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minHeight: '0' }
                },
                messages.map(function (message) {
                    return _react2.default.createElement(
                        _Message2.default,
                        {
                            key: message.createdAt,
                            createdAt: message.createdAt,
                            username: message.username
                        },
                        message.content
                    );
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return MessagesContainer;
}(_react2.default.Component);

var _default = MessagesContainer;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(MessagesContainer, 'MessagesContainer', 'src/components/MessagesContainer.js');
    reactHotLoader.register(_default, 'default', 'src/components/MessagesContainer.js');
    leaveModule(module);
})();

;