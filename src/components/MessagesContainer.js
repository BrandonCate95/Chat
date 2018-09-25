import React from 'react'
import Message from './Message'

class MessagesContainer extends React.Component {

    state = {
        atBottom: false,
    }

    componentDidMount = () => {
        this.props.subscribeToNewMessages()
    }

    handleScroll = (e) => {
        const el = e.target
        if(el.offsetHeight + el.scrollTop >= el.scrollHeight - 100 && this.props.networkStatus !== 3 && this.state.atBottom === false){
            this.setState({atBottom: true})
            if(this.props.nextToken) this.props.fetchMore(this.props.nextToken)
        }
        else if(el.offsetHeight + el.scrollTop <= el.scrollHeight - 100 && this.props.networkStatus !== 3 && this.state.atBottom === true){
            this.setState({atBottom: false})
        }
    }

    render(){
        const {messages} = this.props
        return(
            <div 
                onScroll={this.handleScroll}
                style={{flex: '30', padding: '0 10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minHeight: '0'}}
            >
              {messages.map(message => (
                <Message
                  key={message.createdAt}
                  createdAt={message.createdAt}
                  username={message.username}
                >
                  {message.content}
                </Message>
              ))}
            </div>
        )
    }
}

export default MessagesContainer