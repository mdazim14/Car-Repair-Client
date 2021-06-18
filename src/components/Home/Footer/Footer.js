import React from 'react';
import icon1 from '../../../images/bsIcon1.jpg';
import icon2 from '../../../images/bsIcon2.jpg';
import icon3 from '../../../images/bsIcon3.jpg';
import icon4 from '../../../images/bsIcon4.jpg';
import './Footer.css';

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


const Footer = () => {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="FooterTopStyle pt-5 d-flex align-items-center flex-column p-2 w-100 border-warning">
                        <img style={{ width: '100px', border: '10px solid red', height: '100px', borderRadius: '100%' }} src={icon1} alt="" />
                        <h5 className="mt-3">Title 1</h5>
                        <p>address 1</p>
                        <div>
                            <img style={{ width: '50px', border: '10px solid yellow', height: '50px', borderRadius: '100%', margin:'30px'  }} src={icon1} alt="" />
                            <img style={{ width: '50px', border: '10px solid yellow', height: '50px', borderRadius: '100%', margin:'30px'  }} src={icon1} alt="" />
                            <img style={{ width: '50px', border: '10px solid yellow', height: '50px', borderRadius: '100%', margin:'30px' }} src={icon1} alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '250px' }} className="backgroundImg d-flex flex-wrap d-flex justify-content-center align-items-center">
                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100 border-warning">
                        <img style={{ width: '50px', border: '10px solid red', height: '50px', borderRadius: '100%' }} src={icon1} alt="" />
                        <h5 className="mt-3">Title 1</h5>
                        <p>address 1</p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className="text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                        <img style={{ width: '50px', border: '10px solid red', height: '50px', borderRadius: '100%' }} src={icon1} alt="" />
                        <h5 className="mt-3">Title 2</h5>
                        <p>address 2</p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                        <img style={{ width: '50px', border: '10px solid red', height: '50px', borderRadius: '100%' }} src={icon1} alt="" />
                        <h5 className="mt-3">Title 3</h5>
                        <p>address 3</p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                        <img style={{ width: '50px', border: '10px solid red', height: '50px', borderRadius: '100%' }} src={icon1} alt="" />
                        <h5 className="mt-3">Title 4</h5>
                        <p>address 4</p>
                    </div>
                </div>
            </div>
            <p className=" bg-dark text-white p-3 d-flex justify-content-center">Like-themes © All Rights Reserved - 2021 - Purchase</p>
        </div>
    );
};

export default Footer;