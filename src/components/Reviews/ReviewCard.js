import React, { useContext } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({reviews}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div className=" m-auto">
                <Card style={{ width: '350px', height: '500px', margin: '10px', backgroundColor: 'rgba(125, 220, 116, 0.71)' }}>
                    <FontAwesomeIcon variant="top" style={{ width: '150px', height: '150px', margin: 'auto', marginTop: '50px' }} icon={faUserCircle}></FontAwesomeIcon>
                    <Card.Body>
                        <Card.Title className="text-center bg-white p-2"><h2>{reviews.name}</h2></Card.Title>
                        <Card.Text className="text-center mt-5">
                            <h5>{reviews.description}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center bg-primary text-white">
                        <h6>{reviews.status} 5 <FontAwesomeIcon icon={faStar} /> </h6>
                    </Card.Footer>
                </Card>

            </div>
    );
};

export default ReviewCard;