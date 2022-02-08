import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Container, Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "gatsby"
import logo from '../images/JB.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="/"><img className="logo" src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/services/tax-preparation">Tax Preparation</NavDropdown.Item>
        <NavDropdown.Item href="/services/bookkeeping-oversight">Bookkeeping</NavDropdown.Item>
        <NavDropdown.Item href="/services/financial-reporting">Financial Reporting</NavDropdown.Item>
        <NavDropdown.Item href="/services/payroll">Payroll</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href="/insights">Insights</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
