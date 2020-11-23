import React from 'react'
import styled from 'styled-components'
import logo from '../layouts/rocket.png'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'




function NavbarContainer() {
  
    return (
      <Div className="navbar">
      <Navbar bg="light" expand="lg"  > 
      <a className="navbar-brand" to="/">
        <img src={logo} alt='logo' style={{width:'30px', marginLeft: "10px"}}></img>
       </a>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
       <Navbar.Collapse id="basic-navbar-nav" >
         <Nav className="navbar-nav ml-auto">
         <li className="nav-item active ml-auto">
            <Link  to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active ml-auto">
           <Link  to="/add-article" className="nav-link">Add Article</Link>
           </li>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      </Div>
    )
}

export default NavbarContainer

const Div = styled.div`
    .navbar {
      width: 100% !important;
      background: var(--green-shade) !important;
    }

    .nav-link {
        color: black !important;
        padding: 5px !important;
        &:hover{
            color: red !important;
        }

    }

`;
