import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({pd, handleOrderReview}) => {
    const {id, img, name, price, quantity, shipping} = pd
    return (
        <div style={{border : "1px solid black", padding : "6px", width: "50%", margin : "20px auto", borderRadius : "8px", display: "flex",  alignItems : "center", gap : "7px"}}>
            <img style={{width : "91px",height: "91px", padding : "7px", borderRadius : "10px"}} src={img} alt="" />
            <div style={{flexGrow : "1"}}>
                <h3>{name}</h3>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <button onClick={() => handleOrderReview(id)} style={{width : "50px", height : "50px", borderRadius : "50%", display : "flex", justifyContent :"center", alignItems : "center"}}>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;