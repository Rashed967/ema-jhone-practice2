import React from 'react';
import './Cart.css'
const Cart = ({cart, clearCart, children}) => {
    
    let total = 0;
    let totalShipping = 0
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1
        total = total + product.price
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }


    const tax = total*7/100

    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3 className='cart-header'>Order container</h3>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : {total}</p>
                <p>Total Shipping Charge: {totalShipping}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <p>Grand Total : {grandTotal.toFixed(2)}</p>
                <button onClick={clearCart} style={{width : "80%", margin : "0 auto", display : "block", }}>Clear cart</button>
                {children}
        </div>
    );
};

export default Cart;