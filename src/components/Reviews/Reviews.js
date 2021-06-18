import React from 'react';
import icon1 from '../../images/bsIcon1.jpg';
import icon2 from '../../images/bsIcon2.jpg';
import icon3 from '../../images/bsIcon3.jpg';
import icon4 from '../../images/bsIcon4.jpg';
import './Reviews.css';

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

const Reviews = () => {
    return (
        <div>
        <div>
            <div className="d-flex justify-content-center">
                <div className="ReviewsTopStyle d-flex align-items-center flex-column p-2 w-100 border-warning">
                   <h1>Our Reviews</h1>
                </div>
            </div>
        </div>
        <div style={{ height: '600px' }} className="ReviewBack d-flex flex-wrap d-flex justify-content-center align-items-center">
            <div className="col-md-2 d-flex flex-column">
                <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100 border-warning bg-info">
                    <img style={{ width: '200px', border: '10px solid red', height: '200px', borderRadius: '100%' }} src={icon1} alt="" />
                    <h5 className="mt-3">Title 1</h5>
                    <p>address 1</p>
                </div>
            </div>

            <div className="col-md-2 d-flex flex-column">
                <div className="text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning bg-info">
                    <img style={{ width: '200px', border: '10px solid red', height: '200px', borderRadius: '100%' }} src={icon1} alt="" />
                    <h5 className="mt-3">Title 2</h5>
                    <p>address 2</p>
                </div>
            </div>

            <div className="col-md-2 d-flex flex-column">
                <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning bg-info">
                    <img style={{ width: '200px', border: '10px solid red', height: '200px', borderRadius: '100%' }} src={icon1} alt="" />
                    <h5 className="mt-3">Title 3</h5>
                    <p>address 3</p>
                </div>
            </div>

            <div className="col-md-2 d-flex flex-column">
                <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning bg-info">
                    <img style={{ width: '200px', border: '10px solid red', height: '200px', borderRadius: '100%' }} src={icon1} alt="" />
                    <h5 className="mt-3">Title 4</h5>
                    <p>address 4</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Reviews;