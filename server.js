'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _webpackDev = require('./webpack.dev.js');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _App = require('./lib/App');

var _App2 = _interopRequireDefault(_App);

var _webpack3 = require('react-loadable/webpack');

var _reactLoadable3 = require('./react-loadable.json');

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _clientSessions = require('client-sessions');

var _clientSessions2 = _interopRequireDefault(_clientSessions);

require('cross-fetch/polyfill');

var _ApolloProvider = require('react-apollo/ApolloProvider');

var _ApolloProvider2 = _interopRequireDefault(_ApolloProvider);

var _renderToStringWithData = require('react-apollo/renderToStringWithData');

var _awsAppsync = require('aws-appsync');

var _awsAppsync2 = _interopRequireDefault(_awsAppsync);

var _AppSync = require('./lib/AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./lib/aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _awsAmplify = require('aws-amplify');

var _awsAmplify2 = _interopRequireDefault(_awsAmplify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_awsAmplify2.default.configure(_awsExports2.default);

var app = (0, _express2.default)();
var DIST_DIR = _path2.default.join(__dirname, "dist");
var HTML_FILE = _path2.default.join(DIST_DIR, "index.html");
var LOADABLE_JSON = _path2.default.join(__dirname, "react-loadable.json");
var isDevelopment = app.get('env') === "dev";
var DEFAULT_PORT = 3000;

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use((0, _clientSessions2.default)({
	cookieName: 'session',
	secret: 'random_string_goes_here',
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000
}));

if (isDevelopment) {
	console.log('in development');

	var compiler = (0, _webpack2.default)(_webpackDev2.default);

	app.use(require("webpack-dev-middleware")(compiler, {
		noInfo: true, publicPath: _webpackDev2.default.output.publicPath
	}));

	app.use(require("webpack-hot-middleware")(compiler));

	app.get("/*", function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
			var loadable, template;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							loadable = _fs2.default.readFileSync(LOADABLE_JSON, 'utf8');

							loadable = JSON.parse(loadable);
							template = compiler.outputFileSystem.readFileSync(HTML_FILE, 'utf8');

							sendRes(req, res, template, loadable);

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}());
} else {
	console.log('in production');

	var template = _fs2.default.readFileSync(HTML_FILE, 'utf8');

	var initialScripts = _fs2.default.readdirSync(DIST_DIR).filter(function (file) {
		return file.match('(main|runtime|vendors).*.(js$)');
	});
	var initialJs = initialScripts.map(function (script) {
		return _fs2.default.readFileSync(_path2.default.join(__dirname, "dist", script), 'utf8');
	}).join(' ');

	app.use('/dist', _express2.default.static(DIST_DIR));

	app.get("/*", function (req, res) {
		return sendRes(req, res, template);
	});
}

function sendRes(req, res, template, loadable) {
	var context = {};
	var modules = [];

	var client = new _awsAppsync2.default({
		url: _AppSync2.default.graphqlEndpoint,
		region: _AppSync2.default.region,
		auth: {
			type: _AppSync2.default.authenticationType,
			apiKey: _AppSync2.default.apiKey
		}
	});
	client.ssrMode = true; // appsync client dosent allow for ssrmod option so this is best option

	var username = req.session.user || 'guest' + Math.random().toString().slice(2, 10);
	req.session.user = username;

	var reactDom = _react2.default.createElement(
		_reactLoadable2.default.Capture,
		{ report: function report(moduleName) {
				return modules.push(moduleName);
			} },
		_react2.default.createElement(
			_ApolloProvider2.default,
			{ client: client },
			_react2.default.createElement(
				_reactRouter.StaticRouter,
				{ location: req.url, context: context },
				_react2.default.createElement(_App2.default, {
					username: username
				})
			)
		)
	);

	(0, _renderToStringWithData.renderToStringWithData)(reactDom).then(function (content) {
		var initialState = client.extract();

		var bundles = (0, _webpack3.getBundles)(loadable ? loadable : _reactLoadable4.default, modules);
		// let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
		var scripts = bundles.filter(function (bundle) {
			return bundle.file.endsWith('.js');
		});
		var uniqueScripts = [].concat(_toConsumableArray(new Set(scripts))); // removes any duplicates

		var html = template.replace('{{content}}', content).replace('{{username}}', username).replace('{{state}}', JSON.stringify(initialState).replace(/</g, '\\u003c')).replace('{{loadableScripts}}', uniqueScripts.map(function (script) {
			return '<script src="' + script.publicPath + '"></script>';
		}).join('\n'));

		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(html);
	}).catch(function (e) {
		res.status(500);
		res.end('An error occurred:\n\n' + e.stack);
	});
}

// Serve the files on port 3000.
_reactLoadable2.default.preloadAll().then(function () {
	app.listen(app.get('port'), function () {
		console.log('App running at http://localhost:' + app.get('port'));
	});
}).catch(function (err) {
	console.log(err);
});
