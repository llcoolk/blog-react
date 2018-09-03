import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        {props.brand}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample07"
        aria-controls="navbarsExample07"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
