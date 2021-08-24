import React from 'react';
import Login from './Login';
import './NavHeader.css';

function NavHeader() {

    return (
        <div className="splash__container--main">
            <h1>Artisan Bread Delivery</h1>
            <Login />
        </div>
    );
}

export default NavHeader;