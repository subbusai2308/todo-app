import React from 'react'

const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-success">
      <h1> <i className={icon} /> {title}</h1>
    </nav>
  )
}

export default Navbar;
