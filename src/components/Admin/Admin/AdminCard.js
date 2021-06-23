import React from 'react';

const AdminCard = ({ data }) => {
    return (

        <tr>
            <td>#</td>
            <td>{data?.adminName}</td>
            <td>{data?.email}</td>
            <td>{data?.password}</td>
        </tr>

    );
};

export default AdminCard;