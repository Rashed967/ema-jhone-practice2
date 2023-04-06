import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart , deleteShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for(const id in storedCart){
            const addedCart = products.find(product => product.id === id)
            const quantity = storedCart[id]
            if(addedCart){
                addedCart.quantity = quantity
                savedCart.push(addedCart)
            }
            setCart(savedCart)
        }
    }, [products])

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()

    }

    const cartHandler = (product) => {
        let newCart = []
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1
            const remaining = cart.filter(pd => pd.id !==product.id)
            newCart = [...remaining, exist]
        }
        // const newCart = [...cart, product]

        
        setCart(newCart)

        addToDb(product.id)
    } 


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    cartHandler={cartHandler}
                    ></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart}
                clearCart={clearCart}
                >
                    <Link style={{textDecoration : "none"}} to="/orders">
                    <button style={{width : "80%", margin : "0 auto", display : "block", marginTop :"10px"}}>Review orders</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;