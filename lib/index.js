'use strict';

var _BrowserRouter2 = require('react-router-dom/BrowserRouter');

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _AppSync = require('./AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _awsAuthExports = require('./aws-auth-exports');

var _awsAuthExports2 = _interopRequireDefault(_awsAuthExports);

var _awsAppsync = require('aws-appsync');

var _awsAppsync2 = _interopRequireDefault(_awsAppsync);

var _awsAppsyncReact = require('aws-appsync-react');

var _reactApollo = require('react-apollo');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import Auth from '@aws-amplify/auth/lib'
// import Amplify from '@aws-amplify/core/lib'
var client = null;
!_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _this = this;

    var _ref2, Amplify, _ref3, Auth;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('@aws-amplify/core'));
                    });

                case 2:
                    _ref2 = _context2.sent;
                    Amplify = _ref2.default;
                    _context2.next = 6;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('@aws-amplify/auth'));
                    });

                case 6:
                    _ref3 = _context2.sent;
                    Auth = _ref3.default;


                    Amplify.configure(_extends({}, _awsExports2.default, { Auth: _awsAuthExports2.default }));

                    client = new _awsAppsync2.default({
                        url: _AppSync2.default.graphqlEndpoint,
                        region: _AppSync2.default.region,
                        auth: {
                            type: _AppSync2.default.authenticationType,
                            credentials: function () {
                                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    _context.next = 2;
                                                    return Auth.currentCredentials();

                                                case 2:
                                                    return _context.abrupt('return', _context.sent);

                                                case 3:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this);
                                }));

                                function credentials() {
                                    return _ref4.apply(this, arguments);
                                }

                                return credentials;
                            }()
                        }
                    });
                    // this initializes store.cache with server data
                    client.store.cache = new _apolloCacheInmemory.InMemoryCache().restore(window.__APOLLO_STATE__);

                    init();

                case 12:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}))();

function init() {
    var WithProvider = function WithProvider() {
        return _react2.default.createElement(
            _reactApollo.ApolloProvider,
            { client: client },
            _react2.default.createElement(
                _awsAppsyncReact.Rehydrated,
                null,
                _react2.default.createElement(
                    _BrowserRouter3.default,
                    null,
                    _react2.default.createElement(_App2.default, null)
                )
            )
        );
    };

    _reactLoadable2.default.preloadReady().then(function () {
        (0, _reactDom.hydrate)(_react2.default.createElement(WithProvider, null), document.getElementById('root'));
    });
}

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }