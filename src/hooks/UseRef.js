import React, { useRef, useState } from 'react'

const UseRef = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current++;

  const incrementHandler = (e) => {
    setCount(count+1);
  }
  const decrementHandler = (e) => {
    setCount(count-1);
  }
  return (
    <>
     <div>
     <button onClick={incrementHandler}>+</button>
     </div>
     <button onClick={decrementHandler}>-</button>
     <div>{count}</div>
     <div>the renders are : {renders.current}</div>
    </>
  )
}

export default UseRef;