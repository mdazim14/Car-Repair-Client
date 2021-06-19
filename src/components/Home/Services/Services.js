import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
// import icon1 from '../../../images/bsIcon1.jpg';
// import icon2 from '../../../images/bsIcon2.jpg';
// import icon3 from '../../../images/bsIcon3.jpg';
// import icon4 from '../../../images/bsIcon4.jpg';
import FakeData from '../../FakeData/FakeData.json';

const Services = () => {

const [card, setCard] = useState([])
// console.log(card?.length);
// console.log(card);
// const newData = [...infosData];
// setData(newData);

    useEffect(() => {

        setCard(FakeData);
        // console.log(FakeData);
        // fetch(FakeData)
        // .then(res => res.json())
        // .then(data =>  {
        //     console.log(data);
        //     setCard(data)
        // })


    }, [])

    return (
        <section className="">
            <h1 className=" bg-danger text-white text-center p-3">Our Services</h1>
            <div className="m-5 row">
                {
                    card.map(info => <ServicesCard info={info} ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;