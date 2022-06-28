import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_GRAPHCMS_TOKEN}`
  },
  uri: import.meta.env.VITE_GRAPHCMS_API
})

export default apolloClient
