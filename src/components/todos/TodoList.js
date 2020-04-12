import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDelete, handleUpdate, editTodo, handleEdit, handleChange }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} handleUpdate={handleUpdate} editTodo={editTodo} handleChange={handleChange} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </div>
    )
}

export default TodoList
