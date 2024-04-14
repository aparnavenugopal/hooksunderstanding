import React, { useContext } from 'react'
import UserContext from './context/UserContext';

const Profile = () => {
  const {user} = useContext(UserContext);

  if(!user) return <h1>not logged in</h1>
  return (
    <div>
        <h3>Profile: {user.username}</h3>
    </div>
  )
}

export default Profile;