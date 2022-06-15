import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import auth from './../../firebase.init';

const Header = () => {

  const[user]=useAuthState(auth);
  const handleSignOut=() => {
    signOut(auth);
  }
    return (
      <Navbar collapseOnSelect sticky="top"  expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  href="#services">Services</Nav.Link>
          <Nav.Link as={Link} to="/addservice">Add services</Nav.Link>
          <Nav.Link as={Link} to="/manage">Manage services</Nav.Link>
          <Nav.Link  href="#experts">Experts</Nav.Link>
          <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {(user)?
        <button onClick={handleSignOut}>SignOut</button>
        :
          <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>}
      </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;