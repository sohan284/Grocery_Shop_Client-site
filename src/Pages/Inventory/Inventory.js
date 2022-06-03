import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from './../../hooks/useProducts';
import Manage from './Manage/Manage';
import { useEffect, useState, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import './inventory.css'


const Inventory = () => {
    const { productId } = useParams();
    const [afterDelivered,setAfterDelivered] = useState([]);
    const [product, setProduct] = useState({});
    const stockRef = useRef('');
    useEffect(() => {
        const url = `https://gentle-escarpment-15468.herokuapp.com/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const delivered = () =>{
        const newProduct = product.quantity - 1;
        if(newProduct >= 0){
        setAfterDelivered(newProduct);
        product.quantity = newProduct ;
        }
        
    }

    const restock = () =>{
        const stock = stockRef.current.value
        const newStock = product.quantity + parseInt(stock);
        setAfterDelivered(newStock);
        product.quantity = newStock;
    }
    return (
            <div>
                <div className='text-center'>
                    <h1>Product Details</h1>
                    <div  className='m-2'>
                    <input ref={stockRef} type="number" placeholder='Restock your Quantity' />
                    <input   onClick={restock} className='ms-1 rounded-3 bg-success text-white' type="button" value="Restok" />
                    </div>
                   
                </div>
                <div  className='d-flex  justify-content-center'>
                <Card className='card bg-grn' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <h6>Price : {product.price}</h6>
                    <h6>Quantity : {product.quantity}</h6>
                    <h6><small>Supplier : {product.suplierName}</small></h6>
                    <Card.Text>
                        
                        <small> <span className='fw-bold'> Description :</span>{product.description}</small>
                    </Card.Text>
                    <Button onClick={delivered} className='mx-4 px-4' variant="success">Delivered</Button>
                    <Button className='mx-4 px-4' variant='danger'>Checkout</Button>
                </Card.Body>
            </Card>
                </div>
            
        </div>
        
    );
};

export default Inventory;