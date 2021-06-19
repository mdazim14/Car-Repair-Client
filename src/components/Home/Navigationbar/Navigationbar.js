import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { userContext } from '../../../App';

const Navigationbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { displayName, photoURL, email } = loggedInUser;
    return (
        <Navbar style={{ backgroundColor: 'rgba(0,0,0,1', opacity: '0.7' }} className="pl-5 pr-5" collapseOnSelect expand="lg" fixed='top'>
            <Navbar.Brand className="bg-dark text-warning rounded p-2 font-weight-bold" to="#home">Car-Repair</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link mr-3 ml-3 bg-danger rounded font-weight-bold text-white" to="/home">Home</Link>
                    <Link className="nav-link mr-3 ml-3 bg-danger rounded font-weight-bold text-white" to="">About Us</Link>
                    <Link className="nav-link mr-3 ml-3 bg-danger rounded font-weight-bold text-white" to="/contact">Contact</Link>
                    <Link className="nav-link mr-3 ml-3  bg-danger rounded font-weight-bold text-white" to="/dashboard/book">Dashboard</Link>
                    {
                        displayName && <h6 className="nav-link pt-3  text-white  bg-info rounded">{displayName}</h6>
                    }

                    {
                        displayName ? <Link className="nav-link ml-5 p-3 bg-primary text-white  rounded font-weight-bold" to="/login" onClick={() => setLoggedInUser({})}> Log Out </Link> :
                            <Link className="nav-link mr-5 ml-5 p-3 bg-warning bg-warning rounded font-weight-bold text-white" to="/login" >Login</Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigationbar;