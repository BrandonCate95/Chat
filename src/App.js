import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import style from './App.scss'
import Header from './components/Header'
import Loadable from 'react-loadable'
import Loading from './components/Loading'

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
            <div className="col col-md-8 col-lg-6" styleName="style.hello" style={{padding: '0', display: 'flex', flexDirection: 'column', maxHeight: '100vh', minHeight: '0'}}>
                <Header
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
    if(module.hot) return hot(module)(comp)
    else return comp
}

export default chooseHot(App)