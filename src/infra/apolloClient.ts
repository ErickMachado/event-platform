import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4utelwc17y901t63d254wgx/master'
})

export default apolloClient
