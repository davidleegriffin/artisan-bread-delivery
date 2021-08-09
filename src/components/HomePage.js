import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Logout from './Logout';
import './HomePage.css';

function HomePage() {
    
    return (
        <div className="home__container--main">
            <h1>HOME</h1>
            <Logout />
        </div>
    )
}

export default HomePage;
