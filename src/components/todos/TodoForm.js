import React, { Component } from 'react'
import { addTodo, changeInput, updateTodo } from '../../actions/TodoAction';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

class AddTodo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { content, addTodo, currentTodo, updateTodo } = this.props;
    if (content.trim() === '') {
      alert("Sorry we can't insert empty string");
    }
    else {
      const newTodo = {
        id: currentTodo === null ? v4() : currentTodo.id,
        content
      }
      if (currentTodo === null) {
        addTodo(newTodo);
      }
      else {
        updateTodo(newTodo);
      }
    }
  };
  render() {
    const { content, changeInput, currentTodo } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Add todo" value={content} onChange={(e) => changeInput(e.target.value)} />
          <input type="submit" value={!currentTodo ? 'Add Todo' : 'Update Todo'} className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { content, currentTodo } = state;
  return {
    content,
    currentTodo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    changeInput: (content) => dispatch(changeInput(content)),
    updateTodo: (todo) => dispatch(updateTodo(todo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
