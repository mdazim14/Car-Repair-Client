import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import ProductCard from './ProductCard';

const AllProducts = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/getServiceItem')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])



    return (
        <div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className=" bg-danger text-white d-flex align-items-center flex-column p-2 w-100">
                        <h1>Our Services</h1>
                    </div>
                </div>
            </div>
            {/* <div style={{ height: '600px' }} className="ReviewBack d-flex flex-wrap d-flex justify-content-center align-items-center"> */}
            <CardDeck className=" m-auto d-flex justify-content-center align-items-center flex-wrap">
                <div className="d-flex mt-5 mb-5 flex-wrap">
                    {
                        reviews.map(product => <ProductCard products={product} key={product._id}></ProductCard>)
                    }
                </div>

            </CardDeck>

            {/* </div> */}
        </div>
    );
};

export default AllProducts;