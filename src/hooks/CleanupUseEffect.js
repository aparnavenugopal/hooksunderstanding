import React, { useEffect, useState } from 'react'

const CleanupUseEffect = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
        setSeconds(prevsecond => prevsecond+1);
    });
    return () => {
        clearInterval(timerInterval);
    }
  },[]);


  return (
    <div>
        <h2>timer:</h2>
        <p>{seconds} seconds</p>
    </div>
  )
}

export default CleanupUseEffect;