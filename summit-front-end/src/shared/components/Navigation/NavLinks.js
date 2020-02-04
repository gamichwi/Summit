import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <ul>
      <li>
        <NavLink to="/">SUMMITS</NavLink>
      </li>
      <li>
        <NavLink to="/summits/new">NEW SUMMIT</NavLink>
      </li>
      <li>
        <NavLink to="/users">FRIENDS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
