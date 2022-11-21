import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <nav className="NavBar">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/chips">
          Chips
        </NavLink>
        <NavLink to="/candybar">
          Candy Bar
        </NavLink>
        <NavLink to="/pretzels">
          Pretzels
        </NavLink>
      </nav>
    );
  }
  
  export default NavBar;