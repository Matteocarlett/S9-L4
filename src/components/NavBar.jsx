import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fw-bold">
      <Container>
        <Navbar.Brand href="#home">Libreria-Epica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;