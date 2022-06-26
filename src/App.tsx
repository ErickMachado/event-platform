import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import apolloClient from './infra/apolloClient'
import Router from './Router'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
