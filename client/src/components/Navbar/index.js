import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand title mb-0 h1" to="/Home">
        Food List
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" idName="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/Search"
              className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
            >
              Search for Food
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;