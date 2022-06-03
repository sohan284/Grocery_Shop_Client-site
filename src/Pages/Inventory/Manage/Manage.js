import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from './../../../hooks/useProducts';

const Manage = () => {
  const [product,setProduct] = useProducts();

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `https://gentle-escarpment-15468.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = product.filter(product => product._id !== id);
            setProduct(remaining);
        })
    }
}
  return (
    <div className="container">
        <h3 className="text-center fw-bold text-success mt-3 mb-4">Manage Inventory</h3>
        <div className="text-end mt-3">
            <Link to='/addproduct' className="btn btn-success fw-bold ps-5 pe-5">Add Product</Link>
        </div>
        <div>
        <div className="mt-3 bg-dark text-white shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center pt-2 pb-2">
            <Col><h6>Image</h6></Col>
            <Col><h6>Name</h6></Col>
            <Col><h6>Price</h6></Col>
            <Col><h6>Quantity</h6></Col>
            <Col><h6>Remark</h6></Col>
          </Row>
        </div>
        </div>
      {product.map((product) => (
        <div key={product._id} className="shadow mb-3 rounded-3 text-center">
          <Row className=" align-items-center">
            <Col>
            <img width={'80px'} src={product.img} alt="" />
            </Col>
            <Col>{product.name}</Col>
            <Col>{product.price}</Col>
            <Col>{product.quantity}</Col>
            <Col><button onClick={()=>handleDelete(product._id)} className="btn btn-danger">Delete</button></Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Manage;