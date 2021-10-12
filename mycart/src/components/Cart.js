import React from 'react';
import "./Cart.css"
import CartList from './CartList';
import Header from './Header';

const Cart = (props) => {
    const { products } = props
    // console.log(products)
    return (
        <div className="cart">
            {products.map((product) => {
                return <CartList 
                    product={product}
                 key={product.id} 
                 onIncreaseQuantity={props.onIncreaseQuantity} 
                 onDecreaseQuantity={props.onDecreaseQuantity} 
                 onDeleteQuantity={props.onDeleteQuantity} />
            })}
        </div>
    )
} 


export default Cart;