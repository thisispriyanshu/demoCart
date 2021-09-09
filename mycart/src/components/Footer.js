import React from 'react';
import CartList from './CartList';

function Footer(props) {
    return (
        <div className="footer">
            <h4 className="footer__text">Total price : </h4>
            <input value={CartList.price}></input>
        </div>
    );
}

export default Footer;