import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/smk69hY/images-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Lets Buy some Grocery Items</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/KL4dVZH/brands.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
            
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='text-center mt-5'>
                <h2 className='mb-4 text-success'>Inventory</h2>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;