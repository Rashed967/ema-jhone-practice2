import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { removeFromDb, deleteShoppingCart} from '../utilities/fakedb';

const reviewContainer = {
    margin : "100px auto",

}
const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const handleOrderReview = (id) => {
        let remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
        console.log(savedCart)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()

    }
    return (
        <div className='shop-container'>
            <div className={reviewContainer}>
                {
                    cart.map(pd => <ReviewItem
                    key={pd.id}
                    pd={pd}
                    handleOrderReview={handleOrderReview}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                clearCart={clearCart}
                >
                    <Link style={{textDecoration : "none"}} to="/checkout">
                    <button style={{width : "80%", margin : "0 auto", display : "block", marginTop :"10px"}}>Proced to checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};


export default Orders;