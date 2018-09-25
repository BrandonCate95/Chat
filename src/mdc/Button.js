import React from 'react'

class Button extends React.Component {

    buttonRipple = null
    btnRef = null

    componentDidMount = () => {
        if(!this.props.icon){
            return import(/* webpackChunkName: "ripple" */ '@material/ripple').then(({MDCRipple}) => {
                this.buttonRipple = new MDCRipple(this.btnRef);
            })
        }
    }

    componentWillUnmount = () => {
        if(!this.props.icon){
            this.buttonRipple.destroy()
        }
    }

    render(){
        return(
            <button 
                ref={ btn => this.btnRef = btn }
                className="mdc-button"
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button