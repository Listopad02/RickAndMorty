import React from 'react'
import "./Navbar.css"

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="navbar__link">
        <a className="navbar__link-href" href='/'>{ title }</a>
      </div>
    </nav>
  )
}

export default Navbar