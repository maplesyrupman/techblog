import React, {useState} from 'react';
import './index.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import WritePost from './pages/WritePost'
import Login from './pages/Login'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='dashboard'>
              <Route index element={<Dashboard />} />
              <Route path='edit/:postId' element={<WritePost />} />
              <Route path='new' element={<WritePost />} />
            </Route>
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
