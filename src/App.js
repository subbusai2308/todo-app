import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { v4 as uuidv4 } from "uuid";
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';
class App extends Component {
  state = {
    todos: [],
    title: '',
    editTodo: ''
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    let { todos, title } = this.state;
    if(title.trim() === '') {
      alert("Sorry we can't insert empty string");
    }else {
      let todo = {
        id: uuidv4(),
        text: title,
        isEdit: false
      }
      this.setState({ todos: [...todos, todo], title: '' });
    }
  }
  handleDelete = (todoId) => {
    let { todos } = this.state;
    let modifiedTodo = todos.filter(todo => todo.id !== todoId);
    this.setState({ todos: modifiedTodo });
  }
  handleEdit = (todoId) => {
    let { todos, editTodo } = this.state;
    todos.forEach(todo => {
      if (todo.id === todoId) {
        todo.isEdit = true;
        editTodo = todo.text;
      } else {
        todo.isEdit = false;
      }
    });
    this.setState({ todos: todos, editTodo: editTodo });
  }
  handleUpdate = (e) => {
    e.preventDefault();
    let { todos, editTodo } = this.state;
    if (editTodo.trim() ==='') {
      alert("Sorry we can't update empty string");
    }else {
      todos.forEach(todo => {
        if (todo.isEdit === true) {
          todo.isEdit = false;
          todo.text = editTodo;
        }
      });
    }
    this.setState({ todos: todos, editTodo: '' });
  }
  render() {
    let { todos, title, editTodo } = this.state;
    return (
      <Fragment>
        <Navbar title="Todo-App" icon="fa fa-check" />
        <div className="container">
          <AddTodo handleChange={this.handleChange} handleSubmit={this.handleSubmit} title={title} />
          <TodoList todos={todos} handleUpdate={this.handleUpdate} handleChange={this.handleChange} handleDelete={this.handleDelete} handleEdit={this.handleEdit} editTodo={editTodo} />
        </div>
      </Fragment>
    );
  }
}

export default App;
