import React from 'react'

const ReactMemoHoc = ({ items }) => {
  console.log('rendering itemlist...');
  return (
    <div>
        <h2>Item list</h2>
        <ul>
            {
                items.map((item,index) => {
                    <item key={index} name={item}/>
                })
            }
        </ul>
    </div>
  )
}

export default ReactMemoHoc;