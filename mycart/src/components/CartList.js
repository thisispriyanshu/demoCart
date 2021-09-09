import React from 'react';
import "./CartList.css"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

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
                <div className="cart-item-button">
                   <AddIcon/>
                   <RemoveIcon/>
                   <DeleteIcon/>
                </div>
                <div className="cart-item-descr">
                    <p>Quantity : </p>
                    <p>Price : </p>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src="http://www.clipartbest.com/cliparts/RcG/EkX/RcGEkXeRi.png"/>
                </div>
                <div className="cart-item-text">
                    Laptop
                </div>
                <div className="cart-item-button">
                   <AddIcon/>
                   <RemoveIcon/>
                   <DeleteIcon/>
                </div>
                <div className="cart-item-descr">
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
            </div>
        </div>
    );
}

export default CartList;