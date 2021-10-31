import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/Hook/useAuth';
import './Navbar.css'

const Nevbars = () => {
  const {users, logOut} = useAuth()
  console.log(users);
    return (
        <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img  src="https://i.ibb.co/9wTNhSY/Capture-removebg-preview-1.png" height="50px" width="200px" alt="" srcset="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HashLink className="  ms-3 mt-2 "  to="/home">Home</HashLink>
            <HashLink className="  ms-3 mt-2 " to="/home#services">Services</HashLink>
            {users.email && <HashLink className="  ms-3 mt-2 " to="/manage">Manage All</HashLink>}
            {users.email && <HashLink className="  ms-3 mt-2 " to="/shedule">Set Time Shedule</HashLink>}
            <HashLink className="  ms-3 mt-2 " to="/about">About</HashLink>
           
          </Nav>
          <Nav>
            

           {users.email  ?
           
           <div className="dropdown">
  <img style={{cursor: 'pointer', borderRadius:'50%'}} className=" dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" width="50px" src={users.photoURL} alt="" />
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <p className="dropdown-item">{users.displayName}</p>
    <HashLink className="dropdown-item" to=" ">Another action</HashLink>
    <button onClick={logOut} className="dropdown-itme">Log Out</button>
  </ul>
</div>
          
          : <Link to="/login">Login</Link>
          }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Nevbars;