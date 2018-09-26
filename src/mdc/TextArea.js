import React from 'react'
import './TextArea.scss'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import {MDCTextField} from '@material/textfield'

const LoadableCreateMessageButton = Loadable({
    loader: () => import('../components/CreateMessageBtn'),
    loading: Loading,
})

const style = {
    width: "100%",
    resize: "none",
    border: "none",
    outline: "none",
    padding: "32px 55px 16px 23px",
    margin: "0"
}

class TextArea extends React.Component {

    state = {
        focused: false
    }

    textareaRipple = null
    textareaContainerRef = null
    textareaRef = null
    labelRef = null
    
    OnInput() {
        this.style.height = 'auto'
        this.style.height = (this.scrollHeight) + 'px'
    }

    componentDidMount = () => {
        if(!this.props.icon){
            this.textareaRipple = new MDCTextField(this.textareaContainerRef)
        }
        const textarea = this.textareaRef
        textarea.style.height = textarea.scrollHeight
        textarea.style.overflowY = "hidden"
        textarea.addEventListener("input", this.OnInput, false)
    }

    componentWillUnmount = () => {
        if(!this.props.icon){
            this.textareaRipple.destroy()
        }
    }

    restoreLabel = () => {
        this.labelRef.classList.remove('mdc-floating-label--float-above')
    }

    render(){
        const {content, handleChange, user, clearMessage} = this.props
        return(
            <div>
                <div 
                    ref={ textarea => this.textareaContainerRef = textarea }
                    className="mdc-text-field mdc-text-field--textarea"
                    style={{display: 'flex', display: 'flex', margin: '8px 0', position: 'relative', bottom: '0', width: '100%', backgroundColor: 'white', boxShadow: '0 1px 3px 1px grey'}}
                >
                    <textarea 
                        id="textarea" 
                        ref={ textarea => this.textareaRef = textarea }
                        className="mdc-text-field__input" 
                        rows="1"
                        style={style}
                        onChange={handleChange}
                        onFocus={() => this.setState({focused: true})}
                        onBlur={() => this.setState({focused: false})}
                        value={content}
                    ></textarea>
                    <LoadableCreateMessageButton 
                        message={content}
                        user={user}
                        clearMessage={clearMessage}
                        restoreLabel={this.restoreLabel.bind(this)}
                    />
                    <label 
                        ref={ label => this.labelRef = label }
                        htmlFor="textarea" 
                        className="mdc-floating-label" 
                        style={{background: 'none'}}
                    >
                        {this.state.focused &&
                            user
                        }
                        {!this.state.focused && 
                            'Write...'
                        }
                    </label>
                </div>
            </div>
        )
    }
}

export default TextArea