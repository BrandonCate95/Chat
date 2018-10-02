import React from 'react'
import Messages from '../components/ListMessages'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import { Auth } from 'aws-amplify'

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