import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <h4 className="footer__text">Total price : </h4>
            <input value={props.total}></input>
        </div>
    );
}

export default Footer;