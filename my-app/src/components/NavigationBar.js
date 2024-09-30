import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    // jsx code, which is similar to html
    // a bootstrap navbar to link between pages in our app
    // the links are connected to the routes in App.js
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/read">
          Read
        </Nav.Link>
        <Nav.Link as={Link} to="/create">
          Create
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
