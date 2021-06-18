import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Nav, Navbar } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <Navbar style={{backgroundColor: 'rgba(0,0,0,1', opacity: '0.7'}} className="pl-5 pr-5" collapseOnSelect expand="lg" fixed='top'>
        <Navbar.Brand className="bg-dark text-warning rounded p-2 font-weight-bold" to="#home">Car-Repair</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link className="nav-link mr-3 ml-3 bg-danger rounded font-weight-bold text-dark" to="/home">Home</Link>
                <Link className="nav-link mr-3 ml-3 bg-warning rounded font-weight-bold text-dark" to="/orders">About</Link>
                <Link className="nav-link mr-3 ml-3 bg-primary rounded font-weight-bold text-dark" to="/orders">Services</Link>
                <Link className="nav-link mr-3 ml-3 bg-info rounded font-weight-bold text-dark" to="/orders">Reviews</Link>
                <Link className="nav-link mr-3 ml-3 bg-info rounded font-weight-bold text-dark" to="/orders">Contact Us</Link>
            </Nav>
            <Nav className="">
                <Link className="nav-link mr-3 ml-3  bg-info rounded font-weight-bold text-dark" to="/admin">Admin</Link>
                
                  {/* <h6 className="nav-link pt-3  text-white  bg-danger rounded"></h6>  */}

                {/* <Link className="nav-link mr-5 ml-5 p-3 bg-warning text-white  bg-dark rounded font-weight-bold" to="/login"> Log Out </Link> */}
                    <Link className="nav-link mr-3 ml-3 bg-info bg-dark rounded font-weight-bold text-white" to="/login" >Login</Link>
                

            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default Navigationbar;