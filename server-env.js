import fs from 'fs'
import path from 'path'
import compression from 'compression'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import React from 'react'
import { StaticRouter } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import config from './webpack.dev.js'
import Loadable from 'react-loadable'
import App from './lib/App'
import { getBundles } from 'react-loadable/webpack'
import stats from './react-loadable.json'

import 'cross-fetch/polyfill'
import ApolloProvider from 'react-apollo/ApolloProvider'
import { renderToStringWithData } from 'react-apollo/renderToStringWithData'
import AWSAppSyncClient from 'aws-appsync'
import AppSync from './lib/AppSync'

import awsmobile from './lib/aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(awsmobile)    

const app = express()
app.use(compression())
const DIST_DIR = path.join(__dirname, "dist")
const HTML_FILE = path.join(DIST_DIR, "index.html")
const LOADABLE_JSON = path.join(__dirname, "react-loadable.json")
const isDevelopment  = app.get('env') !== "production"
const DEFAULT_PORT = 3000

app.set("port", process.env.PORT || DEFAULT_PORT);

if (isDevelopment) {
	console.log('in development')

	const compiler = webpack(config);
	
	app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	}));

	app.get("/*", async (req, res, next) => {
		var loadable = fs.readFileSync(LOADABLE_JSON, 'utf8')
		loadable = JSON.parse(loadable)
		const template = compiler.outputFileSystem.readFileSync(HTML_FILE, 'utf8')
		sendRes(req, res, template, loadable)
	});
}

else {
	console.log('in production')

	const template = fs.readFileSync(HTML_FILE, 'utf8');

	const initialScripts = fs.readdirSync(DIST_DIR).filter(file => file.match('(main|runtime|vendors).*.(js$)'))
	let initialJs = initialScripts.map(script => fs.readFileSync(path.join(__dirname, "dist", script), 'utf8') ).join(' ')

	app.use('/dist', express.static(DIST_DIR));

	app.get("/*", (req, res) => sendRes(req, res, template) );
}

function sendRes(req, res, template, loadable) {
	let context = {}
	let modules = [];

	const client = new AWSAppSyncClient({
        url: AppSync.graphqlEndpoint,
        region: AppSync.region,
        auth: {
            type: AppSync.authenticationType,
            apiKey: AppSync.apiKey,
        }
	});
	client.ssrMode = true // appsync client dosent allow for ssrmod option so this is best option

	const username = `guest${Math.random().toString().slice(2,10)}`
	let reactDom = (
		<Loadable.Capture report={moduleName => modules.push(moduleName)}>
			<ApolloProvider client={client}>
				<StaticRouter location={req.url} context={context}>
					<App
						username={username}
					/>
				</StaticRouter>
			</ApolloProvider>
		</Loadable.Capture>
	)
	
	renderToStringWithData(reactDom).then((content) => {
		const initialState = client.extract()

		const bundles = getBundles(loadable ? loadable : stats, modules);
		// let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
		let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
		let uniqueScripts = [... new Set(scripts)] // removes any duplicates

		const html = template
			.replace('{{content}}', content)
			.replace('{{username}}', username)
			.replace('{{state}}', JSON.stringify(initialState).replace(/</g, '\\u003c') )
			.replace('{{loadableScripts}}', uniqueScripts.map(script => {
				return `<script src="${script.publicPath}"></script>`
			}).join('\n'))
	  
		res.writeHead( 200, { "Content-Type": "text/html" } )
		res.end( html )
	})
	.catch(e => {
		res.status(500)
		res.end(
		  `An error occurred:\n\n${
			e.stack
		  }`
		)
  	})
}

// Serve the files on port 3000.
Loadable.preloadAll().then(() => {
	app.listen(app.get('port'), function () {
		console.log(`App running at http://localhost:${app.get('port')}`);
	})
}).catch(err => {
	console.log(err);
});