import React from 'react'
import MenuContainer, { Menu } from '../mdc/Menu'

const MoreMenu = (props) => (
    <MenuContainer
        closeMenu={(evt) => {
            const btn = evt.target.parentNode.children[0].children[0]
            btn.setAttribute("aria-pressed", "false")
            btn.children[1].innerHTML = 'arrow_drop_down'
        }}
        openMenu={(evt) => {
            if(evt.target.getAttribute("aria-pressed") === "false"){
                evt.target.setAttribute("aria-pressed", "true")
                evt.target.children[1].innerHTML = 'arrow_drop_up'
            }else{
                evt.target.setAttribute("aria-pressed", "false")
                evt.target.children[1].innerHTML = 'arrow_drop_down'
            }
        }}
        style={{margin: "5px"}}
    >
        <button
            menu-role="button"
            aria-pressed="false"
            style={{height: "auto", padding: "5px 0"}}
        >
            menu
        </button>
        <Menu
            menu-role="menu"
            offset="-106px"
        >
            <div>thing 1</div>
            <div>thing 2</div>
        </Menu>
    </MenuContainer>
)

export default MoreMenu