import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" style={{backgroundColor:'#4671c6'}} variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto">
      <Nav.Link as={Link} href="#home">Home</Nav.Link>
      <Nav.Link as={Link}  href="#features">Researches</Nav.Link>
      <Nav.Link as={Link}  href="#pricing">Donate</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
        </>
    );
};

export default Header;