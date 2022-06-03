import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className='header'>
      <Navbar className='green' fixed='top' expand="lg">
        <Container>
          <div className='d-flex justify-content-between w-100'>
            <div>
              <Navbar.Brand className='fw-bold' href="home">Grocery Store</Navbar.Brand>
            </div>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link className='fw-bolder' as={Link} to="home">Home</Nav.Link>
                  {
                    user && <>
                    <Nav.Link className='fw-bolder' as={Link} to="addproduct">Add Items</Nav.Link>
                    <Nav.Link className='fw-bolder' as={Link} to="inventory">Manage Items</Nav.Link>
                    <Nav.Link className='fw-bolder' as={Link} to="blogs">Blogs</Nav.Link>
                    </>
                  }
                  {
                    user?
                    <button className='border bg-danger text-white rounded-3' onClick={handleSignOut}>logout</button>
                    : 
                    <Nav.Link href="login">Login</Nav.Link>}
                </Nav>
              </Navbar.Collapse>
            </div>

          </div>


        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
