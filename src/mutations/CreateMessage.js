import gql from 'graphql-tag'

export default gql`
mutation createMessage($conversation: String!, $content: String!, $username: String!) {
    createMessage(conversation: $conversation, content: $content, username: $username) {
        id
        content
        createdAt
        username
    }
}`