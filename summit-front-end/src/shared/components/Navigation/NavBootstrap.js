import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../context/auth-context"; //Only shows if logged in

// import "./NavBootstrap.css";

const NavBootstrap = () => {
  const auth = useContext(AuthContext); //will re-render whenever AuthContext changes
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        {" "}
        <img
          alt="Summit logo"
          src="https://i.imgur.com/mpa7HRl.png"
          width="90"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {auth.isLoggedIn && (
            <Nav.Link as={Link} to={`/${auth.userId}/summits`}>My Summits</Nav.Link>
          )}
          {auth.isLoggedIn && (
            <Nav.Link as={Link} to="/summits/new">
              New Summit
            </Nav.Link>
          )}
          {auth.isLoggedIn && <Nav.Link as={Link} to="/users">Summiteers</Nav.Link>}
          {/* 
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        <Nav>
          {!auth.isLoggedIn && <Nav.Link as={Link} to="/auth">Authenticate</Nav.Link>}

          {auth.isLoggedIn && (
            <Nav.Link eventKey={2} onClick={auth.logout}>
              Log Out
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBootstrap;
