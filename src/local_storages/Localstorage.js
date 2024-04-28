import React, { useState, useEffect } from 'react'

const Localstorage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if(storedCount){
        setCount(parseInt(storedCount, 10));
    }
  },[]);
  
  const incrementCount = () => {
    const newCount = count+1;
    setCount(newCount);
    localStorage.setItem('count',newCount.toString());
  }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default Localstorage;