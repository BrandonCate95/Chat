'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListMessages = require('../components/ListMessages');

var _ListMessages2 = _interopRequireDefault(_ListMessages);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _awsAmplify = require('aws-amplify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LoadableTextArea = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../mdc/TextArea'));
        });
    },
    modules: ['../mdc/TextArea'],
    webpack: function webpack() {
        return [require.resolveWeak('../mdc/TextArea')];
    },
    loading: _Loading2.default
});

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            message: '',
            username: ''
        }, _this.handleChange = function (e) {
            _this.setState({ message: e.target.value });
        }, _this.clearMessage = function () {
            _this.setState({ message: '' });
        }, _this.callApi = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var authenticated;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _awsAmplify.Auth.currentCredentials();

                        case 2:
                            authenticated = _context.sent.authenticated;


                            fetch("/api/set_auth", {
                                method: 'POST',
                                body: JSON.stringify({
                                    authenticated: authenticated
                                }),
                                headers: { "Content-Type": "application/json" }
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.callApi();
        }
    }, {
        key: 'render',
        value: function render() {
            var message = this.state.message;
            var username = this.props.username;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_ListMessages2.default, null),
                _react2.default.createElement(LoadableTextArea, {
                    content: message,
                    user: username,
                    handleChange: this.handleChange.bind(this),
                    clearMessage: this.clearMessage.bind(this)
                })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;