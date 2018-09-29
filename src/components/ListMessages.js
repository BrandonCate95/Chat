import React from 'react'
import Query from "react-apollo/Query"
import LIST_MESSAGES from '../queries/ListMessages'
import NEW_MESSAGE_SUB from '../subscriptions/newMessage'
import MessagesContainer from './MessagesContainer'

const ListMessages = () => (
    <Query 
      query={LIST_MESSAGES} 
      variables={{ conversation: "main", count: 8 }} 
      ssr={true}
    >
      {({ loading, error, data, subscribeToMore, fetchMore, networkStatus }) => {
        if (loading) return "Loading..." // only have loading state if ssr set to false, otherwise will have flash of 'loading...'
        if (error) return `Error! ${error.message}`
  
        return (
          <MessagesContainer 
            messages={data.listMessages.messages}
            networkStatus={networkStatus}
            nextToken={data.listMessages.nextToken}
            fetchMore={(nextToken) => 
              fetchMore({
                variables: {
                  conversation: 'main',
                  count: 8,
                  nextToken
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    listMessages: {
                      messages: [...prev.listMessages.messages, ...fetchMoreResult.listMessages.messages],
                      nextToken: fetchMoreResult.listMessages.nextToken,
                      __typename: 'PaginatedMessages'
                    }
                  });
                }
              })
            }
            subscribeToNewMessages={() => 
              subscribeToMore({
                document: NEW_MESSAGE_SUB,
                variables: { conversation: "main" },
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) return prev
                  const newFeedItem = subscriptionData.data.newMessage

                  return Object.assign({}, prev, {
                    listMessages: {
                      messages: [newFeedItem, ...prev.listMessages.messages],
                      nextToken: prev.listMessages.nextToken,
                      __typename: 'PaginatedMessages'
                    }
                  })
                }
              })
            }
          />
        )
      }}
    </Query>
  )

export default ListMessages