import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faBasketShopping, faUser,faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    return (
        <header>
            <div className='container_header'>
                <img src="../../img/logo_orange.png" alt="" />
                
                <div className='link-header'>

                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                    
                </div>

                <section className='icon-header'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} />

                    <FontAwesomeIcon icon={faBasketShopping} style={{ color: "#000000", }} />

                    <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", }} />

                    <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} />
                </section>

            </div>

        </header>
    )
}
