import React from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

const Mainer = () => {
  return (
    <UserContextProvider>
      <div>React with chai</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default Mainer;