import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div class="sidenav">
        <Link to="/">
          <span class="material-icons">home</span>
        </Link>
        <Link to="/route1">
          <span class="material-icons">eco</span>
        </Link>
        <Link to="/route2">
          <span class="material-icons">visibility</span>
        </Link>
        <Link to="/route3">
          <span class="material-icons">assignment_ind</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
