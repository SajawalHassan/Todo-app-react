import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

// Using state machines
function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    // The code that we put in here will run when the app starts
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    // This code will run when we click the button
    event.preventDefault(); // Will stop refreshing when submmiting

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput('') // Clears the todo-search-bar when submmited
  }

// Making everything work
  return (
    <div className="App">
      <h1>Todo app ⌨</h1>

    <form>

    {/* Kepping track of what the user is typing (will be using this a litter later) */}
      <FormControl>
        <InputLabel>📝Add Todo</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)} />
      </FormControl>
      
    {/* Adding a button from matirial ui and making it disabled when nothing is on the search-bar (using the form control) */}
      <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="contained" color="primary">
        Add Todo
      </Button>

    </form>


    {/* Displaying the todo's that the user has putted (using form control) */}
      <ul>
        {todos.map(todo => (
          <Todo text = {todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
