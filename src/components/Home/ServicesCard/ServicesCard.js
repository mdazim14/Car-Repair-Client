import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesCard = ({ info }) => {
   
    return (
        <div className="col-md-3">

            <div className="border border-5 text-white d-flex justify-content-center align-items-center flex-column p-3 w-100 h-100 border-warning bg-info">

                <img src={info.img} style={{ width: '200px', border: '1px solid red', height: '200px', borderRadius: '100%' }}  alt="" />
                <div className="">
                    <h5 className="mt-5">{info.title}</h5>
                    <p>{info.description}</p>
                    <h5 className="text-warning">Price: {info.price} $</h5>
                </div>
                
                <br></br>

                <Link to={`/dashboard/book/${info.id}`} className=" btn btn-primary">Click Service</Link>
            </div>
        </div>
    );
};

export default ServicesCard;