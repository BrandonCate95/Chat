import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Loadable from 'react-loadable'
import Loading from './components/Loading'

const LoadableHeader = Loadable({
    loader: () => import('./components/Header'),
    loading: Loading
})

const LoadableHome = Loadable({
    loader: () => import('./pages/Home'),
    loading: Loading
})

const LoadableAbout = Loadable({
    loader: () => import('./pages/About'),
    loading: Loading
})

const LoadableContact = Loadable({
    loader: () => import('./pages/Contact'),
    loading: Loading
})

const App = ({username = username || window.__USERNAME__}) => (
    <div className="container" style={{height: '100vh'}}>
        <div className="row justify-content-md-center" style={{height: '100vh'}}>
            <div className="col col-md-8 col-lg-6" style={{padding: '0', display: 'flex', flexDirection: 'column', maxHeight: '100vh', minHeight: '0'}}>
                <LoadableHeader
                    username={username}
                />
                <Switch>
                    <Route exact path="/" render={(props) => <LoadableHome {...props} username={username} />} />
                    <Route exact path="/About" render={(props) => <LoadableAbout {...props} />} />
                    <Route exact path="/Contact" render={(props) => <LoadableContact {...props} />} />
                </Switch>
            </div>
        </div>
    </div>
)

function chooseHot(comp){
    if(module.hot){
        const hot = require('react-hot-loader').hot
        return hot(module)(comp)
    } 
    else return comp
}

export default chooseHot(App)