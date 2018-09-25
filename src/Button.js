import React from 'react'
import style from './button.scss'

class Button extends React.Component {

    state = {
        render: false,
        Modal: null
    }

    handleClick = () => {
        // import('./Modal')
        //     .then(module => this.setState({ 
        //         Modal: module.default,
        //         render: true
        //     }))
    }

    render(){
        const {render, Modal} = this.state
        // if(render) return (<Modal />)
        return(
            <button
                onClick={this.handleClick.bind(this)}
                styleName="style.hiBtn"
            >
                click me!!!!!
            </button>
        )
    }
}

export default Button