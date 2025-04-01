import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBasketShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

import SearchBar from "../components/SearchBar";

import "../style/Header.css"

export default function Header() {
    return (
        <header>
            <div className='container_header'>
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="img-link-set"><img src="../../img/logo_orange.png" alt="" /></Link>

                <div className='link-header'>

                    <NavLink to={"/"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                    <NavLink to={"/products"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Products</NavLink>
                    <NavLink to={"/aboutus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                    <NavLink to={"/contactus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>

                </div>

                <section className='icon-header'>

                    <SearchBar />

                    <Link to={"/cart"} onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon icon={faBasketShopping} style={{ color: "#000000", }} />
                    </Link>

                    <Link to={"/wishlist"} onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", }} />
                    </Link>

                </section>

            </div>

        </header>
    )
}
