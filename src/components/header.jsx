import React from "react";
import image from '../assets/images/2.png';
import '../assets/css/Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Header() {

    return(
        <div>
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={image}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        </div>
    )
    
}

export default Header;