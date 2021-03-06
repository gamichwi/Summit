import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import ButtonTemplate from '../FormElements/Button';
import { AuthContext } from "../../context/auth-context";//Only shows if logged in

// import './NavLinks.css'

const NavLinks = props => {
  const auth = useContext(AuthContext); //will re-render whenever AuthContext changes
  return (
    <div className="nav-links">
    <ul>
      <li>
        <NavLink to="/">SUMMIT FEED</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/summits`}>MY SUMMITS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/summits/new">NEW SUMMIT</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
      <li>
        <NavLink to="/users">FRIENDS</NavLink>
      </li>
      )}
      {!auth.isLoggedIn && (
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
      )}
      {auth.isLoggedIn && (
        <ButtonTemplate onClick={auth.logout}>LOG OUT</ButtonTemplate>
      )}
    </ul>
    </div>
  );
};

export default NavLinks;
