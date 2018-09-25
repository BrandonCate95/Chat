import React from 'react'

const Message = ({children, createdAt, username}) => (
    <div style={{backgroundColor: 'rgba(220,255,255,0.8)', border: '1px solid lightgrey', borderRadius: '5px', margin: '10px 0', padding: '6px 7px 3px 11px', boxShadow: '1px 2px 2px #888888'}}>
        <div style={{textAlign: 'start', fontWeight: 'bold', color: 'lightcoral'}}>{username}</div>
        <div style={{textAlign: 'start', marginTop: '2px', paddingLeft: '5px'}}>{children}</div>
        <div style={{textAlign: 'end', fontSize: '10px', color: 'grey'}}>{createdAt}</div>
    </div>
)

export default Message