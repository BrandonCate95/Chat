'use strict';

var _BrowserRouter2 = require('react-router-dom/BrowserRouter');

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

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

_awsAmplify2.default.configure(_awsExports2.default);

// import(/* webpackChunkName: "aws-amplify" */ 'aws-amplify').then((Amplify) => {
//     Amplify.configure(awsmobile)    
// })

var client = new _awsAppsync2.default({
    url: _AppSync2.default.graphqlEndpoint,
    region: _AppSync2.default.region,
    auth: {
        type: _AppSync2.default.authenticationType,
        apiKey: _AppSync2.default.apiKey
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
    _reactDom2.default.render(_react2.default.createElement(WithProvider, null), document.getElementById('root'));
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