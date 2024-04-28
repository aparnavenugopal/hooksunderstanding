import React, { useState } from 'react';
import { Cookies } from 'react-cookie';


const Cookie = () => {
  const [username, setUsername] = useState('');
  const cookies = new Cookies();
  
  const handleLogin = () => {
    cookies.set('username', username, { path: '/'});
  };

  const handleLogout = () => {
    cookies.remove('username');
  }

  return (
    <div>
      {
        cookies.get('username') ? (
            <div>
                <p>Welcome, {cookies.get('username')}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ):(
            <div>
                <input 
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                />
                      <button onClick={handleLogin}>Login</button>
            </div>
        )
      }
    </div>
  )
}

export default Cookie;