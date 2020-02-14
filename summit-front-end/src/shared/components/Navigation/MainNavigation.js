import React from "react";
import { Navbar } from "react-bootstrap";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = props => {
  return (
    <div className="main-navigation">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="Summit logo"
          src="https://vignette.wikia.nocookie.net/logopedia/images/9/9f/ParamountLandscape.jpg/revision/latest?cb=20130119125027"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Summit
      </Navbar.Brand>
      <MainHeader>
          <NavLinks />
        </MainHeader>
    </Navbar>
    </div>
  );
};

export default MainNavigation;
