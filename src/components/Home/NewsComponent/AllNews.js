import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/newsCard';
import FakeData from '../../FakeData/FakeData.json';

const AllNews = () => {

const [card, setCard] = useState([])

    useEffect(() => {

        setCard(FakeData);


    }, [])

    return (
        <section className="">
            <h1 className=" bg-warning text-dark text-center p-3">News of motor vehicles</h1>
            <div className="m-5 row">
                {
                    card.map(info => <ServicesCard info={info} ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default AllNews;