import React from 'react'

const Item = ({ id, name, onDelete}) => {
  console.log(`rendering item ${id}`);
  return (
    <div>
        <span>{name}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Item;