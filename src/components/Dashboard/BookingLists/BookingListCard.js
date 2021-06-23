import React from 'react';

const BookingListCard = (props) => {

// console.log(props);

// const deleteService = (id) => {

        // fetch(`http://localhost:3001/dashboard/bookList${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(result => {

            // })
// }
    
    return (

        <tr>
            <td>{props?.count}</td>
            <td>Mahee Joshor</td>
            <td>azim14@gmail.com</td>
            <td>{props?.products?.serviceName}</td>
            <td>{props?.products?.price}</td>
            <td>{props?.products?.orderDate}</td>

            {/* <button  onClick={ () => deleteService(props?.products?._id)} className=" btn ml-auto btn-danger m-3"> Delete </button> */}
            <button   className=" btn ml-auto btn-danger m-3"> Delete </button>
            
        </tr>


    );
};

export default BookingListCard;