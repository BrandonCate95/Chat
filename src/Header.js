import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'rgba(255,255,255,0.9)', 
    marginLeft: '5px', 
    fontSize: '16px',
    textTransform: 'uppercase',
    textAlign: 'center'
}

const Header = ({username}) => (
    <div style={{backgroundColor: '#489687', marginBottom: '8px', boxShadow: '0 1px 3px 1px grey', color: 'rgba(255,255,255,0.9'}}>
        <div style={{display: 'flex', padding: '0 10px'}}>
            <Link to="/" style={{
                color: 'rgba(255,255,255,0.9)', 
                margin: '5px', 
                fontSize: '22px',
                textTransform: 'uppercase',
                textAlign: 'center',
                flex: 1,
                textAlign: 'start'
            }}><i className="fas fa-home"></i></Link>
            <div>
                <Link to="/About" style={linkStyle}>About</Link>
                <Link to="/Contact" style={linkStyle}>Contact</Link>
            </div>            
        </div>
        <header>
            <h1 style={{textAlign: 'center', fontSize: 'calc(1.7vh + 1.7vw)'}}>Welcome {username}</h1>
        </header>
    </div>
)

export default Header