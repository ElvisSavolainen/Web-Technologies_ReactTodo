// TodoInput.js

import React from 'react';

function TodoInput({ userInput, setUserInput }) {
  return (
    <input
      className="userInput"
      name="userInput"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
}

export default TodoInput;
