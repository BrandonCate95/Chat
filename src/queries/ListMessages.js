import gql from 'graphql-tag'

export default gql`
query listMessages($conversation: String!, $count: Int, $nextToken: String) {
    listMessages(conversation: $conversation, count: $count, nextToken: $nextToken) {
        messages {
            __typename
            id
            content
            createdAt
            username
        }
        nextToken
    }
}`