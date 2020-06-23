import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { todos } = state;
  return {
    todos
  }
};
export default connect(mapStateToProps)(TodoList);
