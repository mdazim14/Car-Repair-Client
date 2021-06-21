import React, { useContext } from 'react';
import logo from '../../../images/logo.webp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { userContext } from '../../../App';
import './Navigationbar.css';

const Navigationbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { displayName, photoURL, email } = loggedInUser;
    return (
        <Navbar className="navBarStyle pl-5 pr-5" collapseOnSelect expand="lg">
            {/* <Navbar.Brand className="bg-dark text-white rounded p-2 font-weight-bold" to="#home">Car-Repair</Navbar.Brand> */}
            <Navbar.Brand to="#home"> <img
                src={logo}
                width="150"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link mr-3 ml-3 bg-dark rounded font-weight-bold text-white" to="/home">Home</Link>
                    <Link className="nav-link mr-3 ml-3 bg-dark rounded font-weight-bold text-white" to="/aboutUs">About Us</Link>
                    <Link className="nav-link mr-3 ml-3 bg-dark rounded font-weight-bold text-white" to="/contact">Contact</Link>
                    <Link className="nav-link mr-3 ml-3  bg-dark rounded font-weight-bold text-white" to="/dashboard/bookService">Dashboard</Link>
                    {
                        displayName && <h6 className="nav-link pt-3  text-white  bg-success rounded">{displayName}</h6>
                    }

                    {
                        displayName ? <Link className="nav-link ml-5 p-3 bg-primary text-white rounded font-weight-bold" to="/login" onClick={() => setLoggedInUser({})}> Log Out </Link> :
                            <Link className="nav-link mr-5 ml-5 p-3 bg-warning bg-warning rounded font-weight-bold text-white" to="/login" >Login</Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigationbar;