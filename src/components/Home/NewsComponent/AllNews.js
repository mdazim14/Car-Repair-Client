import React, { useEffect, useState } from 'react';
import NewsCard from '../News/NewsCard';
import FakeData from '../../FakeData/FakeData.json';

const AllNews = () => {

    const [card, setCard] = useState([])

    useEffect(() => {

        setCard(FakeData);

    }, [])

    return (
        <section className="mb-5">

            <div className=" bg-warning text-dark text-center p-3">
                <h1 >News of motor vehicles</h1>
            </div>
            <div className="d-flex">
                <div className="col-md-3 pb-5 border-top border-primary bg-warning text-center text-dark flex-column d-flex">
                    <h1 className="mb-5 text-uppercase pt-5">News of Auto Brands</h1>
                    <p className="">If you had access to a car while living at home, chances are your parents took care of its maintenance or offered reminders as to when to take it in for service. When you’re on your own, car maintenance becomes your responsibility. Yes, it can be expensive and time consuming, but the investment you make today will save you money down the road.</p>
                    <p className="mt-3">If you had access to a car while living at home, chances are your parents took care of its maintenance or offered reminders as to when to take it in for service. When you’re on your own, car maintenance becomes your responsibility. Yes, it can be expensive and time consuming, but the investment you make today will save you money down the road.</p>
                </div>
                <div className="col-md-9 mt-5 row">
                    {
                        card.map(info => <NewsCard info={info} ></NewsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllNews;