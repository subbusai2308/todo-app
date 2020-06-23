import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title="Todo-App" icon="fa fa-check" />
        <div className="container">
          <TodoForm />
          <TodoList />
        </div>
      </Fragment>
    );
  }
}

export default App;
