import React from 'react';

const BookingListCard = (props) => {
console.log(props);
    
    return (

        <tr>
            <td>{props?.count}</td>
            <td>Mahee Joshor</td>
            <td>azim14@gmail.com</td>
            <td>{props?.products?.serviceName}</td>
            <td>{props?.products?.price}</td>
            <td>{props?.products?.orderDate}</td>
        </tr>


    );
};

export default BookingListCard;