import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>order page</h3>
            </div>
            <div className="cart-container">
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};


export default Orders;