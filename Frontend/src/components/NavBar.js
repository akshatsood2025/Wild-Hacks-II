import React, { Component } from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="mynav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Into The Wild</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Add Animal</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  SignUp
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
