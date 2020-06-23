const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      todo
    }
  }
};

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id
    }
  }
};

const changeInput = (content) => {
  return {
    type: "CHANGE_INPUT",
    payload: {
      content
    }
  }
};

const editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: {
      todo
    }
  }
};

const updateTodo = (todo) => {
  return {
    type: "UPDATE_TODO",
    payload: todo
  }
}


export { addTodo, deleteTodo, changeInput, editTodo, updateTodo };