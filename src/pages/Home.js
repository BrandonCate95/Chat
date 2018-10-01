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
            // .then(res => console.log(res.express))
            // .catch(err => console.log(err))
    }
    
    callApi = async () => {
        Auth.currentCredentials().then(session => console.log(session))

        fetch("/api/hello", {
            method: 'POST',
            body: JSON.stringify({
              task: 'some task'
            }),
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            console.log("Request complete! response:", res.json().then(data => console.log(data)))
        })

        // const response = await fetch('/api/hello')
        // const body = await response.json()
    
        // if (response.status !== 200) throw Error(body.message)
    
        // return body
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