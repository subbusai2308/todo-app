import React from 'react'

const TodoItem = ({ todo, editTodo, handleChange, handleUpdate, handleDelete, handleEdit }) => {
  if (todo.isEdit) {
    return(
      <div className="card">
        <form className="form" onSubmit={handleUpdate}>
          <input type="text" name="editTodo" placeholder="Edit Todo" value={editTodo} onChange={handleChange} />
          <input type="submit" value="Update todo" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
  return (
    <div className="card"> 
      <h1>
        {todo.text}
        <button style={{ float: "right", border: "none", backgroundColor: "#fff",cursor:"pointer" }} onClick={handleDelete.bind(this, todo.id)}>
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
        <button style={{float: "right", border:"none", backgroundColor:"#fff", marginRight:"20px", cursor:"pointer"}} onClick={handleEdit.bind(this, todo.id)}>
          <i className="fa fa-wrench" aria-hidden="true" />
        </button>
      </h1>
    </div>
  )
}

export default TodoItem
