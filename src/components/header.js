import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Container, Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="/">JB</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      {/*<Nav.Link href="#deets">About Us</Nav.Link>
      <NavDropdown title="Accounting Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">s</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href="#memes">Insights</Nav.Link>*/}
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
