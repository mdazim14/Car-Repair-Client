import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import { Link, useParams } from 'react-router-dom';

const ProductCard = ({ products }) => {
// console.log(products._id);
    const history= useHistory();

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
            <Card style={{ width: '350px', height: '350px', margin: '10px', backgroundColor: '#FFE5CC' }}>
                <Card.Img variant="top" style={{ width: '90px', borderRadius: '50%', margin: 'auto', marginTop: '15px' }} src={products.image} />
                <Card.Body>
                    <Card.Title className="text-center mb-5 mt-5">{products.serviceName}</Card.Title>
                    <Card.Text className="text-left">
                        {products.description}
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer className="d-flex justify-content-center">
                    <button onClick={()=>handleClick(products._id)} variant="primary"> Click To Book</button>
                </Card.Footer> */}
                <Card.Footer className="d-flex justify-content-center">
                    <Link to={`/dashboard/bookService/${id}`} variant="primary"> Click To Book</Link>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default ProductCard;