import React from 'react'

const AddTodo = ({ title, handleChange, handleSubmit }) => {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Search Users" value={title} onChange={handleChange} />
        <input type="submit" value="Add" className="btn btn-dark btn-block" />
      </form>
    </div>
  )
}

export default AddTodo
