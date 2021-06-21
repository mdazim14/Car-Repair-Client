import React from 'react';
import icon1 from '../../../images/bsIcon1.jpg';
import icon2 from '../../../images/bsIcon2.jpg';
import icon3 from '../../../images/bsIcon3.jpg';
import icon4 from '../../../images/bsIcon4.jpg';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarker, faEnvelope, faClock, faCarSide } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon  icon={faCarSide} style={{ width: '100px',color: 'red', height: '80px', borderRadius: '100%' }} />
                        <h5 className="mt-3">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo.</h5>
                        <p> Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '250px' }} className="backgroundImg d-flex flex-wrap d-flex justify-content-center align-items-center">
                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100 border-warning">
                    <FontAwesomeIcon  icon={faPhoneAlt} style={{ width: '50px', color: 'red', height: '50px', borderRadius: '100%' }} />
                        <h5 className="mt-3">Company</h5>
                        <p className="text-danger">Round-the-clock</p>

                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className="text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                    <FontAwesomeIcon  icon={faMapMarker} style={{ width: '50px', color: 'red', height: '50px', borderRadius: '100%' }} />
                        <h5 className="mt-3 fw-border">Location</h5>
                        <p>1353 Locust St, London City</p>
                        <p>Mo 642556</p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                    <FontAwesomeIcon  icon={faEnvelope} style={{color: 'red',  width: '50px', height: '50px', borderRadius: '100%' }} />
                        <h5 className="mt-3 fw-border">Email</h5>
                        <p>info@aql-theme.com</p>
                        <p>support@aql-theme.com</p>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column">
                    <div className=" text-white d-flex justify-content-center align-items-center flex-column p-2 w-100  border-warning">
                    <FontAwesomeIcon  icon={faClock} style={{ width: '50', color: 'red', height: '50px', borderRadius: '100%' }} />
                        <h5 className="mt-3 fw-border">Time</h5>
                        <p>Mo-Sa:07.00-22.00</p>
                        <p>Su:07:00-16:00</p>
                    </div>
                </div>
            </div>
            <p className=" bg-dark text-white p-3 d-flex justify-content-center">Like-themes © All Rights Reserved - 2021 - Purchase</p>
        </div>
    );
};

export default Footer;