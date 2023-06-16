import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="links">
          <h1 className="logo">Bookstore CMS</h1>
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink to="/" className="navbar-link" exact>
                Books
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/categories" className="navbar-link">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-user">
          <i className="fas fa-user-circle" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
