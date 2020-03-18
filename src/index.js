import React from 'react'
import App from './App'
import AppSync from './AppSync'
import awsmobile from './aws-exports'

!async function(){
    const { default: Loadable } = await import(/* webpackChunkName: "loadable" */ 'react-loadable')
    const { BrowserRouter } = await import(/* webpackChunkName: "react-router-dom" */ 'react-router-dom')
    const { hydrate } = await import(/* webpackChunkName: "react-dom" */ 'react-dom')
    const { Rehydrated } = await import(/* webpackChunkName: "aws-appsync-react" */ 'aws-appsync-react')
    const { ApolloProvider } = await import(/* webpackChunkName: "react-apollo" */ 'react-apollo')
    const { default: Amplify } = await import(/* webpackChunkName: "amplify" */ '@aws-amplify/core/lib')
    const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
    const { default: AWSAppSyncClient } = await import(/* webpackChunkName: "aws-appsync-react" */ 'aws-appsync')
    const { InMemoryCache } = await import(/* webpackChunkName: "apollo-cache-inmemory" */ 'apollo-cache-inmemory')

    Amplify.configure(awsmobile) 

    const client = new AWSAppSyncClient({
        url: AppSync.graphqlEndpoint,
        region: AppSync.region,
        auth: {
            type: AppSync.authenticationType,
            credentials: async () => await Auth.currentCredentials(),
        }
    })
    // this initializes store.cache with server data
    client.store.cache = new InMemoryCache().restore(window.__APOLLO_STATE__)

    const WithProvider = () => (
        <ApolloProvider client={client}>
            <Rehydrated> 
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Rehydrated>
        </ApolloProvider>
    )
    
    Loadable.preloadReady().then(() => {
        hydrate(<WithProvider />, document.getElementById('root'))
    })

    // if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'dev') {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js').then(registration => {
    //             console.log('SW registered: ', registration);
    //         }).catch(registrationError => {
    //             console.log('SW registration failed: ', registrationError);
    //         })
    //     })
    // }
}()