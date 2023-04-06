import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem/ReviewItem';

const reviewContainer = {
    margin : "100px auto",

}
const Orders = () => {
    const savedCart = useLoaderData()
    return (
        <div className='shop-container'>
            <div className={reviewContainer}>
                {
                    savedCart.map(pd => <ReviewItem
                    key={pd.id}
                    pd={pd}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart savedCart={savedCart}></Cart>
            </div>
        </div>
    );
};


export default Orders;