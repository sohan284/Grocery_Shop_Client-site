import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name,_id, price, img,description,quantity } = product;
    const navigate = useNavigate();

    const handleUpdate = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price : {price}</h6>
                    <h6>Quantity : {quantity}</h6>
                    <Card.Text>
                        {description.slice(0,50)}
                    </Card.Text>
                    <Button onClick={() =>handleUpdate(_id)}  variant="success">Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;