import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
     <nav className="navbar">
      <div className="container nav-wrapper">
        <div className="brand">
          <span className="cursor">_</span> WILL26.DEV
        </div>

        <div className="nav-links">
          <Link to="/featured">/featured</Link>
          <Link to="/archive">/archive</Link>
          <a href="https://github.com/will26developer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}
