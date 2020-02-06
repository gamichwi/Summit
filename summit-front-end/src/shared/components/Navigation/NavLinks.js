import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import ButtonTemplate from '../FormElements/Button';
import { AuthContext } from "../../context/auth-context";//Only shows if logged in

const NavLinks = props => {
  const auth = useContext(AuthContext); //will re-render whenever AuthContext changes
  return (
    <ul>
      <li>
        <NavLink to="/">SUMMIT FEED</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/summits">MY SUMMITS</NavLink>
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
  );
};

export default NavLinks;
