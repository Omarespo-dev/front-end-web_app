import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faBasketShopping, faUser,faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='container_header'>
            <Link to={"/"} className="img-link-set"><img src="../../img/logo_orange.png" alt="" /></Link>
                
                <div className='link-header'>

                    <Link to={"/"}>Home</Link>
                    <Link to={"/products"}>Products</Link>
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
