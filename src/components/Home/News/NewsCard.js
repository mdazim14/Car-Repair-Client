import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NewsCard = ({ info }) => {

    return (
        <div className="col-md-3">
            <div className="border border-5 text-white d-flex justify-content-center align-items-center flex-column p-4 border-warning bg-info">

                <img src={info.img} style={{ width: '200px', border: '1px solid red', height: '200px', borderRadius: '100%' }} alt="" />
                <div className="">
                    <h3 className="mt-3">Tesla Created New Robot Car</h3>
                    <p>{info.description}</p>
                </div>
                <div className="">
                    <h5 className="">Today's News</h5>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;