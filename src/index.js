import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import AppSync from './AppSync'
import awsmobile from './aws-exports'
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Amplify from 'aws-amplify'
Amplify.configure(awsmobile)    

const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AppSync.authenticationType,
        credentials: async () => await Amplify.Auth.currentCredentials(),
    }
})
// this initializes store.cache with server data
client.store.cache = new InMemoryCache().restore(window.__APOLLO_STATE__)


const WithProvider = () => (
    <ApolloProvider client={client}>
        <Rehydrated> 
            <Router>
                <App />
            </Router>
        </Rehydrated>
    </ApolloProvider>
)

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<WithProvider />, document.getElementById('root'));
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