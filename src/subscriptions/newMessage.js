import gql from 'graphql-tag'

export default gql`
    subscription NewMessage {
    newMessage {
        __typename
        id
        content
        createdAt
        username
    }
}`