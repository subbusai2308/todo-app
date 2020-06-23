const initialState = {
  todos: [],
  content: "",
  currentTodo: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        content: "",
        todos: [...state.todos, action.payload.todo]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case "EDIT_TODO":
      return {
        ...state,
        content: action.payload.todo.content,
        currentTodo: action.payload.todo
      };
    case "UPDATE_TODO": {
      return {
        content: '',
        currentTodo: null,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      }
    }
    case "CHANGE_INPUT": return {
      ...state,
      content: action.payload.content
    };

    default:
      return state;
  }
}

export default rootReducer;