import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import icon1 from '../../../images/bsIcon1.jpg';
import icon2 from '../../../images/bsIcon2.jpg';
import icon3 from '../../../images/bsIcon3.jpg';
import icon4 from '../../../images/bsIcon4.jpg';

const infosData = [
    {
        title: 'Contactless Washing',
        description: 'Vestibulum tortor risus, rutrum at congue sed ultricies finibus.',
        icon: icon1,
        background: 'danger'
    },
    {
        title: 'Safety Materials',
        description: 'Cras aliquam tristique metus, eu gravida diam vestibulum gravida.',
        icon: icon2,
        background: 'danger'
    },
    {
        title: 'Modern Equipment',
        description: 'Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.',
        icon: icon3,
        background: 'danger'
    },
    {
        title: 'Extensive Cleaning',
        description: 'Sestibulum non dolor sit amet mi moles tincidunt vel non velit.',
        icon: icon4,
        background: 'danger'
    }
]

const Services = () => {
    return (
        <section className="">
            <h1 className=" bg-danger text-white text-center p-3">Our Services</h1>
            <div className="m-5 row">
                {
                    infosData.map(info => <ServicesCard info={info} ></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;