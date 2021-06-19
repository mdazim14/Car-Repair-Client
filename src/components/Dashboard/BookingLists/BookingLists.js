import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { Table } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import BookingListCard from './BookingListCard';

const BookingLists = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookingList, setBookingList] = useState([]);

    const [status, setStatus] = useState({});

    // const history = useHistory(); 
    // const { title, price, wight } = bookingList.Products;


    useEffect(() => {
        fetch('http://localhost:3011/bookings')
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])
    let count = 1;

    // const deleteProduct = (id) => {
    //     fetch(`http://localhost:3011/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(result => {

    //         })
    // }

    return (
        <div>

            <div className="mt-3">
                <h1 className="text-white text-center p-3">All Bookings</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Your Name</th>
                            <th>Email</th>
                            <th>Booking Name</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookingList.map(products => <BookingListCard count={count++} products={products.Product }> </BookingListCard>)
                        }
                    </tbody>
                </Table>
            </div>





        </div>

    );
};

export default BookingLists;