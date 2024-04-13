import React, { useState, useEffect } from 'react'
import { useCallback } from 'react';
import Item from './Item';

const Parent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((item, index) => ({
            id: index+1,
            name: item.title
        }));
        setItems(formattedData);
      })
      .catch(error => console.error('error fetching items:', error));
  },[]);

  const handleDelete = useCallback((itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id != itemId));
  },[setItems]);

  console.log('rendering parentcomponent...');

  return (
    <div>
        <h1>Item list</h1>
        {
            items.map(item => (
                <Item key={item.id}
                      id={item.id}
                      name={item.name}
                      onDelete={handleDelete}/>
            ))
        }
    </div>
  )
}

export default Parent;