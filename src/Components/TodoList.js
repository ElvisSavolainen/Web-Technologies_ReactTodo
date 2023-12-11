// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ ListOfItems, onDeleteTask }) {
  const listItems = ListOfItems.map(item => (
    <TodoItem key={item.id} item={item} onDeleteTask={onDeleteTask} />
  ));

  return <ul>{listItems}</ul>;
}

export default TodoList;
