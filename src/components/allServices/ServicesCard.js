import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTools, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './ServicesCard.css';

const ServicesCard = ({ products }) => {
    // console.log(products._id);
    // const history= useHistory();
    // const handleClick = (id)=>{
    //         console.log(id);
    //         const url=`/bookService/${id}`;
    //         history.push(url);
    // }
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // console.log(reviews);
    const id = products._id;

    return (
        <div className=" m-auto">
            <Card style={{ width: '350px', height: '450px', margin: '10px', backgroundColor: 'rgb(90, 219, 236)' }}>
                {/* <Card.Img  src={products.image} /> */}
                <FontAwesomeIcon variant="top" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: 'auto', marginTop: '15px' }} icon={faTools} />
                <Card.Body >
                    <Card.Title className="text-center mb-5 mt-5">{products.serviceName}</Card.Title>
                    <Card.Text className="text-left">
                        {products.description}
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer className="d-flex justify-content-center">
                    <button onClick={()=>handleClick(products._id)} variant="primary"> Click To Book</button>
                </Card.Footer> */}
                <Card.Footer className="d-flex justify-content-center">
                    <Link to={`/dashboard/bookService/${id}`} variant="primary"> <button className="btn btn-primary" type=""> Click To Book</button> </Link>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default ServicesCard;