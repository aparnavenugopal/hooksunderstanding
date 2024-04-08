import React, { useState } from 'react';

const UseStatehook = () => {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState(""); // Initialize as an empty string
  const [todo, setTodo] = useState([]);

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const addingTodo = () => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Math.random().toString(36).substring(2),
        todovalue: text
      };
      setTodo([...todo, newTodo]);
      setText("");
    }
  }

  const deleteTodo = (id) => {
    const newTodos = todo.filter(item => item.id !== id);
    setTodo(newTodos);
  }

  const updateTodo = (id) => {
    const itemToUpdate = todo.find(item => item.id === id);
    setEditText(itemToUpdate.todovalue); // Set the editText state to the current todo item's value
    const updatedTodos = todo.map(item => { // Enable editing for this todo item
      if (item.id === id) {
        return { ...item, editable: true };
      }
      return item;
    });
    setTodo(updatedTodos);
  }

  const handleChange = (e) => {
    setEditText(e.target.value);
  }

  const submitUpdate = (id) => {
    const updatedTodos = todo.map(item => {
      if (item.id === id) {
        return { ...item, todovalue: editText, editable: false }; // Update the todo item's value and disable editing
      }
      return item;
    });
    setTodo(updatedTodos);
    setEditText(""); // Reset the editText state after submission
  }

  return (
    <>
      <h3>Todo list entry:</h3>
      <input 
        name="todovalue"
        type='string'
        value={text}
        onChange={changeHandler}
      />
      <button onClick={addingTodo}>Add</button>
      {
        todo.map((item) => {
          return (
            <div key={item.id}>
              {item.editable ? ( // Render input field if editable
                <input 
                  type="text"
                  value={editText} // Use editText state directly
                  onChange={handleChange}
                />
              ) : (
                <span>{item.todovalue}</span>
              )}
              <button onClick={() => updateTodo(item.id)}>Update</button>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              {item.editable && ( // Render "Submit" button if editable
                <button onClick={() => submitUpdate(item.id)}>Submit</button>
              )}
            </div>
          )
        })
      }
    </>
  )
}

export default UseStatehook;
