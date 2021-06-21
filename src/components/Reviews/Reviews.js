import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import ReviewCard from './ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3011/addReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="bg-primary text-white d-flex align-items-center flex-column p-3 w-100">
                        <h1>Our Client Reviews</h1>
                    </div>
                </div>
            </div>
            {/* <div style={{ height: '600px' }} className="ReviewBack d-flex flex-wrap d-flex justify-content-center align-items-center"> */}
            <CardDeck className=" m-auto d-flex justify-content-center align-items-center flex-wrap">
                <div className="d-flex mt-5 mb-5 flex-wrap">
                    {
                        reviews.map(review => <ReviewCard reviews={review} key={review._id}></ReviewCard>)
                    }
                </div>

            </CardDeck>


            {/* </div> */}
        </div>
    );
};

export default Reviews;