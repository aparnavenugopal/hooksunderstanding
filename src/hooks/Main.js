import React, { useState } from 'react'
import ReactMemoHoc from './ReactMemoHoc';

const Main = () => {
  const [items, setItems] = useState(['Mango', 'Apple', 'Banana', 'Orange']);
  const addItem = () => {
    const newItem = prompt('enter a new item:');
    if(newItem){
        setItems(prevItems => [...prevItems, newItem]);
    }
  }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ReactMemoHoc items={items}/>
    </div>
  )
}

export default Main;
