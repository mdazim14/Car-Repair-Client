import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
// import { userContext } from '../../../App';

const Book = () => {
    const history = useHistory();
    const { id } = useParams();

    console.log(id);
    // console.log(FakeData);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/bookings')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const booking = services.find(service => parseInt(service._id) === parseInt(id));
    console.log(booking);


    const handleCheckOut = () => {
        console.log("Check Out button");
        const orderDate = new Date().toLocaleString();
        const oderDetails = { Product: booking, orderDate: orderDate };

        fetch('http://localhost:3011/bookService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(oderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed successfully');
                    history.push('/');
                }
            })
    }

    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // const { id } = useParams();
    // const [services, setServices] = useState([]);

    return (
        <div className="mt-5 mb-5 border">
            <div className="d-flex flex-wrap justify-content-around align-items-center" style={{ marginTop: '5px' }}>

                <div className="col-md-3 border">
                    <h2 className="text-center p-3">Booking Information</h2>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Your Name</th>
                                <th>Booking Service</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>User Name</td>
                                <td>{booking?.Product?.title}</td>
                                <td>{booking?.Product?.price}</td>
                            </tr>
                        </tbody>

                    </Table>

                    {booking &&
                        <button onClick={() => { handleCheckOut() }} className="btn d-flex justify-content-center m-auto btn-primary" type="">Place Order</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Book;