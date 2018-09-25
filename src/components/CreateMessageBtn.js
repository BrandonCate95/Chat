import React from 'react'
import { Mutation } from "react-apollo"
import CREATE_MESSAGE from '../mutations/CreateMessage'

const CreateMessageBtn = ({message, user, clearMessage, restoreLabel}) => (
    <Mutation mutation={CREATE_MESSAGE}>
      {(createMessage, { data }) => (
        <button 
            title="send"
            onClick={() => {
                createMessage({ variables: { conversation: 'main', content: message, username: user }})
                clearMessage()
                restoreLabel()
            }}
            style={{zIndex: '1', background: 'none', border: '1px solid lightblue', color: 'rgb(0,180,255)', borderRadius: '50%', padding: '5px 10px 5px 8px', cursor: 'pointer', boxShadow: '1px 1px 5px 0px grey', position: 'absolute', top: '15px', right: '15px', outline: 'none'}}
        >
            <i className="fas fa-paper-plane"></i>
        </button>
      )}
    </Mutation>
)

export default CreateMessageBtn