'use strict';

var _BrowserRouter2 = require('react-router-dom/BrowserRouter');

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _AppSync = require('./AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _awsAppsync = require('aws-appsync');

var _awsAppsync2 = _interopRequireDefault(_awsAppsync);

var _awsAppsyncReact = require('aws-appsync-react');

var _reactApollo = require('react-apollo');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _awsAmplify = require('aws-amplify');

var _awsAmplify2 = _interopRequireDefault(_awsAmplify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_awsAmplify2.default.configure(_awsExports2.default);

var client = new _awsAppsync2.default({
    url: _AppSync2.default.graphqlEndpoint,
    region: _AppSync2.default.region,
    auth: {
        type: _AppSync2.default.authenticationType,
        credentials: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _awsAmplify2.default.Auth.currentCredentials();

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            function credentials() {
                return _ref.apply(this, arguments);
            }

            return credentials;
        }()
    }
});
// this initializes store.cache with server data
client.store.cache = new _apolloCacheInmemory.InMemoryCache().restore(window.__APOLLO_STATE__);

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
    _reactDom2.default.hydrate(_react2.default.createElement(WithProvider, null), document.getElementById('root'));
});

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }