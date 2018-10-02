import React from 'react'
import './Menu.scss'
import {MDCMenu, Corner} from '@material/menu'

export const Menu = ({style, className, children}) => {
    var i = 0
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { className: `mdc-list-item ${className}`, role: "menuitem", tabIndex: `${i++}`, style: {width: "100%", ...style} }));

    return (
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
            {childrenWithProps}
        </ul>
    )
}

class MenuContainer extends React.Component {
    
    menu = null
    menuEl = React.createRef()
    menuButtonEl = React.createRef()

    componentDidMount = () => {
      // Instantiation
      this.menu = new MDCMenu(this.menuEl.current)
      // Toggle menu open
      this.menuButtonEl.current.addEventListener('click', this.toggleMenu)
      // Close Menu if clicked elsewhere
      if(this.props.closeMenu){ this.menuEl.current.addEventListener('MDCMenu:cancel', this.props.closeMenu) }
      // Set Anchor Corner to Bottom End
      this.menu.setAnchorCorner(Corner.BOTTOM_START)
      // Turn off menu open animations
      this.menu.quickOpen = true
    }

    componentWillUnmount = () => {
        this.menuButtonEl.current.removeEventListener('click', this.toggleMenu)
        if(this.props.closeMenu){ this.menuEl.current.removeEventListener('MDCMenu:cancel', this.props.closeMenu) }
        this.menu.destroy()
    }

    toggleMenu = (evt) => {
        this.menu.open = !this.menu.open
        this.props.openMenu(evt)
    }

    render(){
        const {props} = this
        const menu = props.children.filter((child) => child.props["menu-role"] === 'menu')[0]
        return(
            <div style={props.style}>
                <div id="demo-menu" className="mdc-menu-anchor">

                    <span ref={this.menuButtonEl}>
                        {props.children.filter((child) => child.props["menu-role"] === 'button')}
                    </span>

                    <div 
                        ref={this.menuEl} 
                        className="mdc-menu mdc-menu-surface" 
                        tabIndex="-1" 
                        style={{
                            left: `${menu.props.offset}px !important`
                        }}
                    >
                        {menu}
                    </div>

                </div>
            </div>
        )
    }
}

export default MenuContainer