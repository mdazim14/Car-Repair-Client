import React, { useContext } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { userContext } from '../../App';

const ReviewCard = ({reviews}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div className=" m-auto">
                <Card style={{ width: '350px', height: '350px', margin: '10px', backgroundColor: '#CCFFFF' }}>
                    <Card.Img variant="top" style={{ width: '90px', borderRadius: '50%', margin: 'auto', marginTop: '15px' }} src={reviews.image} />
                    <Card.Body>
                        <Card.Title className="text-center">{reviews.name}</Card.Title>
                        <Card.Text className="text-center">
                            {reviews.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6>{reviews.status}</h6>
                    </Card.Footer>
                </Card>

            </div>
    );
};

export default ReviewCard;