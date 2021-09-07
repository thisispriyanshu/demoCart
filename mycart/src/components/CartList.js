import React from 'react';
import "./CartList.css"

function CartList(props) {
    return (
        <div className="cartlist">
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src="http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png"/>
                </div>
                <div className="cart-item-text">
                    Laptop
                </div>
            </div>
        </div>
    );
}

export default CartList;