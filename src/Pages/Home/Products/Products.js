import React from 'react';
import Inventory from '../../Inventory/Inventory';
import Product from '../Product/Product';
import useProducts from './../../../hooks/useProducts';

const Products = () => {
    const [products,setProduct] = useProducts([]);

    return (
        <div className='row gap-3 text-center'>
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;