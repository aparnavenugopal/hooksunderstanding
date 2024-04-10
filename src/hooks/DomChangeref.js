import React, { useRef } from 'react'

const DomChangeref = () => {
  const buttonColor = useRef(null);
  const changeColor = () => {
    if(buttonColor.current){
        buttonColor.current.style.backgroundColor= 'red';
    }
  }
  return (
    <div>
        <button ref={buttonColor} onClick={changeColor}>
            click me!!!
        </button>
    </div>
  )
}

export default DomChangeref;