import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user , logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" style={{backgroundColor:'#4671c6'}} variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="/features">Researches</Nav.Link>
      <Nav.Link as={Link}  to="/pricing">Donate</Nav.Link>
    </Nav>
    </Navbar.Collapse>
   {user?.email ?
   <Button onClick={logOut} style={{backgroundColor:'#58baed' , border:"none"}}>Logout</Button>:<Nav.Link as={Link} to="/login"><Button style={{backgroundColor:'#58baed' , border:"none"}}>Login</Button></Nav.Link>}
    
    <Navbar.Text>Signed in as{user?.email }</Navbar.Text>
    </Container>
  </Navbar> 
        </>
    );
};

export default Header;