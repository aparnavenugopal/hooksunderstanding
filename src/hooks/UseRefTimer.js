import React, { useState, useRef } from 'react';

function UseRefTimer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default UseRefTimer;
