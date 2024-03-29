import React from "react";
import { NavLink } from "react-router-dom";
import { fb } from "../../utils/firebase";
import { AuthContext } from "../../App";

function Nav() {
  const isLogged = React.useContext(AuthContext).isLogged;
  // let localsetIsLogged = React.useContext(AuthContext).setIsLogged;
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/add">
        Garage Sale Helper
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {isLogged ? null : <NavLink className="Nav_link" to="/signup">Sign Up</NavLink>}
          </li>
          <li className="nav-item">
            {isLogged ? null : <NavLink className="Nav_link" to="/login">Login</NavLink>}
          </li>
          <li className="nav-item">
            <NavLink className="Nav_link" to="/add">Vendors</NavLink>
          </li>
          {isLogged ? (
            <form className="form-inline">
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => fb.auth().signOut()}
              >
                {" "}
                Sign out
              </button>
            </form>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
