import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import PaymentCardBox from '../PaymentCardBox/PaymentCardBox';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
// import { userContext } from '../../../App';
import FakeData from '../../FakeData/FakeData.json';

const Book = () => {
    const history = useHistory();
    const {id} = useParams();
    // console.log(id);
    // console.log(FakeData);

    const booking = FakeData.find( service => service.id == id);
    // console.log(booking);

    const  handleCheckOut = () => {
        console.log("Check Out button");
        // const orderDate = { currentTime: new Date().toLocaleString() };
        const oderDetails = {Product: booking};

        fetch('http://localhost:5059/bookService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(oderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Placed successfully');
                history.push('/home');
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
                                <td>{booking?.title}</td>
                                <td>{booking?.price}</td>
                            </tr>
                        </tbody>

                    </Table>
                    <button onClick={()=>{handleCheckOut()}} className="btn d-flex justify-content-center m-auto btn-primary" type="">Place Order</button>
                </div>
            </div>             
        </div>
    );
};

export default Book;