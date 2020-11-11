import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const SideMenu = () => {
    return (
        <div className="nav-menu">
            <ul className="nav-list">
                <li><FontAwesomeIcon className="fa-lg" icon={faHome} />&emsp;Home</li>
                <li><FontAwesomeIcon className="fa-lg" icon={faHeart} />&emsp;Favourites</li>
                <li><FontAwesomeIcon className="fa-lg" icon={faShoppingCart} />&emsp;Cart</li>
            </ul>
        </div>
    )
}