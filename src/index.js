import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'
import AppSync from './AppSync'
import awsmobile from './aws-exports'
import awsauth from './aws-auth-exports'
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

// import Auth from '@aws-amplify/auth/lib'
// import Amplify from '@aws-amplify/core/lib'
var client = null
!async function(){
    const { default: Amplify } = await import(/* webpackChunkName: "amplify" */ '@aws-amplify/core')
    const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth')

    Amplify.configure({ ...awsmobile, Auth: awsauth }) 

    client = new AWSAppSyncClient({
        url: AppSync.graphqlEndpoint,
        region: AppSync.region,
        auth: {
            type: AppSync.authenticationType,
            credentials: async () => await Auth.currentCredentials(),
        }
    })
    // this initializes store.cache with server data
    client.store.cache = new InMemoryCache().restore(window.__APOLLO_STATE__)

    init()
}()

function init(){
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
        hydrate(<WithProvider />, document.getElementById('root'));
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