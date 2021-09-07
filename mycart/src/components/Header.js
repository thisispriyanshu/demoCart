import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"

function Header(props) {
    return (
        <div className="header">
            <h3>My cart</h3>
            <div className="cart-button">
              <ShoppingCartIcon/>
              </div>
        </div>
    );
}

export default Header;