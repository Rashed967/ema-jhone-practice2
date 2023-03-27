import React from 'react';
import './Product.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {category, name, seller, price, ratings, img, stock} = props.product;

    const cartHandler = props.cartHandler;
   
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
          <p>Price : ${price}</p>
          <p>Manufacturer : {seller}</p>
          <p>Ratings : {ratings} stars</p>
          </div>
          <button onClick={() => cartHandler(props.product)} className='btn-cart'>
            <span  className='addToCartText'>Add to cart </span>
          <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;