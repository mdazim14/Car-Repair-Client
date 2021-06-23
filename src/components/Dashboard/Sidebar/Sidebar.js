import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAmin] = useState(false);

    // const {id} = useParams();
    useEffect(() => {
        fetch('http://localhost:3011/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAmin(data));
    }, [])

    return (
        <div>
            <div style={{ height: '100vh' }}>

                <div className="text-dark border h5 p-3 d-flex flex-column h-75">
                    <Link to="/dashboard/bookService" className="">Book</Link>
                    <Link to="/dashboard/bookList" className="mt-4">Book List</Link>
                    <Link to="/dashboard/orderlist" className="mt-4">Order List</Link>
                    <Link to="/dashboard/addReviews" className="mt-4">Add Reviews</Link>

                    { isAdmin &&
                        <div className="text-dark  h5  d-flex flex-column h-75">
                            <Link to="/dashboard/addProduct" className="mt-4">Add Services</Link>
                            <Link to="/dashboard/makeAdmin" className="mt-4">Make Admin</Link>
                            <Link to="/dashboard/adminList" className="mt-4">Admin List</Link>
                        </div>
                    }
                </div>

                {/* <div className="position-relative">
                    <button className="position-absolute top-50 start-50 w-100 btn-lg btn btn-primary mt-5 ">Log Out</button>
                </div> */}


                {/* {
                    displayName ? <Link className="nav-link ml-5 p-3 bg-primary text-white rounded font-weight-bold" to="/login" onClick={() => setLoggedInUser({})}> Log Out </Link> :
                        <Link className="w-100 btn-lg btn btn-primary mt-5    nav-link p-3 bg-primary bg-warning rounded font-weight-bold text-white" to="/login" >Login</Link>
                } */}

            </div>
        </div>
    );
};

export default Sidebar;