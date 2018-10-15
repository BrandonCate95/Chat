'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _AppSync = require('./AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _awsAuthExports = require('./aws-auth-exports');

var _awsAuthExports2 = _interopRequireDefault(_awsAuthExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

!_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _this = this;

    var _ref2, Loadable, _ref3, BrowserRouter, _ref4, hydrate, _ref5, Rehydrated, _ref6, ApolloProvider, _ref7, Amplify, _ref8, Auth, _ref9, AWSAppSyncClient, _ref10, InMemoryCache, client, WithProvider;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('react-loadable'));
                    });

                case 2:
                    _ref2 = _context2.sent;
                    Loadable = _ref2.default;
                    _context2.next = 6;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('react-router-dom'));
                    });

                case 6:
                    _ref3 = _context2.sent;
                    BrowserRouter = _ref3.BrowserRouter;
                    _context2.next = 10;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('react-dom'));
                    });

                case 10:
                    _ref4 = _context2.sent;
                    hydrate = _ref4.hydrate;
                    _context2.next = 14;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('aws-appsync-react'));
                    });

                case 14:
                    _ref5 = _context2.sent;
                    Rehydrated = _ref5.Rehydrated;
                    _context2.next = 18;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('react-apollo'));
                    });

                case 18:
                    _ref6 = _context2.sent;
                    ApolloProvider = _ref6.ApolloProvider;
                    _context2.next = 22;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('@aws-amplify/core'));
                    });

                case 22:
                    _ref7 = _context2.sent;
                    Amplify = _ref7.default;
                    _context2.next = 26;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('@aws-amplify/auth'));
                    });

                case 26:
                    _ref8 = _context2.sent;
                    Auth = _ref8.default;
                    _context2.next = 30;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('aws-appsync'));
                    });

                case 30:
                    _ref9 = _context2.sent;
                    AWSAppSyncClient = _ref9.default;
                    _context2.next = 34;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('apollo-cache-inmemory'));
                    });

                case 34:
                    _ref10 = _context2.sent;
                    InMemoryCache = _ref10.InMemoryCache;


                    Amplify.configure(_extends({}, _awsExports2.default, { Auth: _awsAuthExports2.default }));

                    client = new AWSAppSyncClient({
                        url: _AppSync2.default.graphqlEndpoint,
                        region: _AppSync2.default.region,
                        auth: {
                            type: _AppSync2.default.authenticationType,
                            credentials: function () {
                                var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
                                    return _ref11.apply(this, arguments);
                                }

                                return credentials;
                            }()
                        }
                    });
                    // this initializes store.cache with server data

                    client.store.cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

                    WithProvider = function WithProvider() {
                        return _react2.default.createElement(
                            ApolloProvider,
                            { client: client },
                            _react2.default.createElement(
                                Rehydrated,
                                null,
                                _react2.default.createElement(
                                    BrowserRouter,
                                    null,
                                    _react2.default.createElement(_App2.default, null)
                                )
                            )
                        );
                    };

                    Loadable.preloadReady().then(function () {
                        hydrate(_react2.default.createElement(WithProvider, null), document.getElementById('root'));
                    });

                case 41:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}))();

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }