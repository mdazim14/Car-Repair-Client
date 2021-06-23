import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AdminCard from './AdminCard';

const AdminList = () => {
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/getAdmin')
            .then(res => res.json())
            .then(data => {
                setAdminData(data);
            })
    }, [])


    // const deleteAdmin = (id) => {
    //     fetch(`http://localhost:3011/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //         })
    // }



    return (
        <div className="text-center text-white mt-5 bg-dark p-5">
            <Table striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Admin Name</th>
                        <th>Admin Email</th>
                        <th>Admin Password</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        adminData.map(data => <AdminCard data={data}></AdminCard>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AdminList;