import React, { useState } from 'react'

const Sessionstorage = () => {
  const [message, setMessage] = useState('');
 
  const handleChange = (event) => {
    setMessage(event.target.value);
    sessionStorage.setItem('message', event.target.value);
  }

  return (
    <div>
        <input
              type="text"
              value={message}
              onChange={handleChange}
        />
        <p>Message: {message}</p>
    </div>
  )
}

export default Sessionstorage;