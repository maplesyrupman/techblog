import './index.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import WritePost from './pages/WritePost'
import EditPost from './pages/EditPost'
import Logup from './pages/Logup'
import SinglePost from './pages/SinglePost';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({})
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='post/:postId' element={<SinglePost />} />
            <Route path='dashboard'>
              <Route index element={<Dashboard />} />
              <Route path='edit/:postId' element={<EditPost />} />
              <Route path='new' element={<WritePost />} />
            </Route>
            <Route path='logup' element={<Logup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;
