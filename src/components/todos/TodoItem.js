import React, { Component } from 'react'
import { deleteTodo, editTodo } from '../../actions/TodoAction';
import { connect } from 'react-redux';

class TodoItem extends Component {
  handleEdit = (todo) => {
    const { editTodo } = this.props;
    editTodo(todo);
  }
  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <div className="card">
        <h1>
          {todo.content}
          <button style={{ float: "right", border: "none", backgroundColor: "#fff", cursor: "pointer" }} onClick={() => deleteTodo(todo.id)}>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
          <button style={{ float: "right", border: "none", backgroundColor: "#fff", marginRight: "20px", cursor: "pointer" }} onClick={() => this.handleEdit(todo)}>
            <i className="fa fa-wrench" aria-hidden="true" />
          </button>
        </h1>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (todo) => dispatch(editTodo(todo)),
  }
}
export default connect(null, mapDispatchToProps)(TodoItem);
