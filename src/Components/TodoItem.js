// TodoItem.js
import React from 'react';

function TodoItem({ item, onDeleteTask }) {
  return (
    <div className="itemList" style={{ color: item.isTask ? 'magenta' : 'darkgreen' }}>
      {item.title}
      <button className="deleteButton" onClick={() => onDeleteTask(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
