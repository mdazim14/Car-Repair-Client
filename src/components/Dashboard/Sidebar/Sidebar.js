import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {

    // const {id} = useParams();

    return (
        <div>
            <div style={{ height: '100vh'}}>

                <div className="text-dark border h5 p-3 d-flex flex-column">
                    <Link to="/dashboard/book/id" className="">Book</Link>
                    <Link to="/dashboard/bookList" className="mt-4">Book List</Link>
                    <Link to="/dashboard/orderlist" className="mt-4">Order List</Link>
                    <Link to="/dashboard/addReviews" className="mt-4">Add Reviews</Link>

                    <Link to="/makeAdmin" className="mt-4">Make Admin</Link>
                    <Link to="/addService" className="mt-4">Add Services</Link>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;