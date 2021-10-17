import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
 const {user, LogOut} = useAuth();  

    return (
        <>
  <Navbar  sticky="top" bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand as={HashLink} to="#home" className='text-info'>Master Car Repair</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
      {
        user.email ?
        <Button onClick={LogOut} variant="light">LogOut</Button>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
          Sign in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;