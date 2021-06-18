import React from 'react';

const ServicesCard = ({ info }) => {
    return (
        <div className="col-md-3">
            <div className="border border-5 text-white d-flex justify-content-center align-items-center flex-column p-3 w-100 h-100 border-warning bg-info">
                <img style={{width: '200px', border: '1px solid red', height: '200px', borderRadius: '100%'}} src={info.icon} alt=""/>
                <h5 className="mt-5">{info.title}</h5>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default ServicesCard;