import React, { Component } from 'react';
import './style.scss';
import { Link,
    BrowserRouter as Router,
    Route } from "react-router-dom";
import logo from './logo.jpeg';
class Header extends Component {

    render() {
        if (window.location.pathname === '/') return null;
        return (
            <div>
                <div className='nav'>
                    <img className="smlogo" src={logo} alt="logo" />
                    <ul className="aull">
                    <li className='lii'>Home</li>
                   ]<li className='lii'>Personal Circular</li>
                    <li className='lii' >My Favourites</li>
                    <li className='lii' style ={{float: 'right'}}>Login/Register</li>
                
                </ul>
                </div>
                
            </div>
        );
    }
}

export default Header;