import React from 'react'
import { Query } from "react-apollo"
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'

const GET_NEO4J = gql`
query getNeo4j {
  getNeo4j{
    neo4j{
      postId
      title
    }
  }
}
`

const AboutPage = () => (
    <div>
        <Helmet>
            <title>Contact</title>
        </Helmet>
        a boot!
        <Query
            query={GET_NEO4J}
            notifyOnNetworkStatusChange
            ssr={true}
            >
            {({ loading, data, refetch, networkStatus }) => {
                if (networkStatus === 4) return "Refetching!"
                if(loading) return null
                return (
                <div>
                    <button onClick={() => refetch()}>refetch</button>
                    {data.getNeo4j.neo4j.map((item) => 
                        <div key={item.postId}>{item.title}</div>
                    )}
                </div>
                )
            }}
        </Query>
    </div>
)

export default AboutPage