import React from 'react'
import Messages from '../components/ListMessages'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import { Helmet } from 'react-helmet'

const LoadableTextArea = Loadable({
    loader: () => import('../mdc/TextArea'),
    loading: Loading,
})

class Home extends React.Component {

    state = {
        message: '',
        username: '',
    }

    handleChange = (e) => {
        this.setState({message: e.target.value})
    }

    clearMessage = () => {
        this.setState({message: ''})
    }
    
    componentDidMount() {
        this.callApi()
    }
    
    callApi = async () => {
        const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
        const authenticated = (await Auth.currentCredentials()).authenticated

        fetch("/api/set_auth", {
            method: 'POST',
            body: JSON.stringify({
                authenticated
            }),
            headers: {"Content-Type": "application/json"}
        })
    }

    render(){
        const {message} = this.state
        const {username} = this.props
        return(
            <React.Fragment>
                <Helmet>
                    <title>Chat</title>
                </Helmet>
                <Messages />
                <LoadableTextArea 
                    content={message}
                    user={username}
                    handleChange={this.handleChange.bind(this)}
                    clearMessage={this.clearMessage.bind(this)}
                /> 
            </React.Fragment>              
        )
    }
}

export default Home