import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../context/auth-context";//Only shows if logged in


const NavBootstrap = () => {
    const auth = useContext(AuthContext); //will re-render whenever AuthContext changes

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">SUMMIT</Navbar.Brand>
      <Nav className="mr-auto">

        <Nav.Link href="/">SUMMIT FEED</Nav.Link>

        {auth.isLoggedIn && (
        <Nav.Link href={`/${auth.userId}/summits`}>MY SUMMITS</Nav.Link>
        )}

{auth.isLoggedIn && (
        <Nav.Link href="/summits/new">NEW SUMMIT</Nav.Link>
        )}
        {auth.isLoggedIn && (
        <Nav.Link href="FRIENDS">FRIENDS</Nav.Link>
        )}
        <Nav.Link href="pricing">Pricing</Nav.Link>
        <Nav.Link href="pricing">Pricing</Nav.Link>
        <Nav.Link href="pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};


// {!auth.isLoggedIn && (

//   <NavLink to="/auth">AUTHENTICATE</NavLink>

// )}
// {auth.isLoggedIn && (
//   <ButtonTemplate onClick={auth.logout}>LOG OUT</ButtonTemplate>
// )}


// };


export default NavBootstrap;