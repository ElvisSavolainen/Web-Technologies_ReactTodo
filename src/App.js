import React, { useState } from 'react';
import TodoInput from './Components/TodoInput.js';
import TodoList from './Components/TodoList.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const initialListOfItems = [
  { title: 's', isTask: false, id: 1 },
  { title: 's', isTask: false, id: 2 },
  { title: 's', isTask: true, id: 3 },
];

export default function MyApp() {
  const [userInput, setUserInput] = useState('');
  const [ListOfItems, setListOfItems] = useState(initialListOfItems);

  function handleAddTask() {
    alert('Task added successfully');
    console.log('User input:', userInput);
    setListOfItems([...ListOfItems, { title: userInput, isTask: true, id: Date.now() }]);
    setUserInput('');
  }

  function handleDeleteTask(itemId) {
    const updatedList = ListOfItems.filter(item => item.id !== itemId);
    setListOfItems(updatedList);
  }

  return (
    <div className='container d-flex flex-column text-center mt-5'>
      <h1 className='text-center mb-4'>Welcome to my app</h1>
      <div className='input-group mb-3 justify-content-center'>
        <TodoInput userInput={userInput} setUserInput={setUserInput} />
        <button className='btn btn-primary text-center' type='button' onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <TodoList ListOfItems={ListOfItems} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
