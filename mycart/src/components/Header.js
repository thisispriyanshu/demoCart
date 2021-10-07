import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"

const Header=(props)=> {
    return (
        <div className="header">
            <h3>My cart</h3>
            <div className="cart-button">
              <ShoppingCartIcon/>
              </div>
             <span className="cart-count">Total Quantity: {props.totalQty}</span>
        </div>
    );
}

export default Header;