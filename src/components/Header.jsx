import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBasketShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

import SearchBar from "../components/SearchBar";

export default function Header() {
    return (
        <header>
            <div className='container_header'>
                <Link to={"/"} className="img-link-set"><img src="../../img/logo_orange.png" alt="" /></Link>

                <div className='link-header'>

                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                    <NavLink to={"/products"} className="nav-link">Products</NavLink>
                    <NavLink to={"/aboutus"} className="nav-link">About Us</NavLink>
                    <NavLink to={"/contactus"} className="nav-link">Contact Us</NavLink>

                </div>

                <section className='icon-header'>

                    <SearchBar />

                    <Link to={"/cart"}>
                        <FontAwesomeIcon icon={faBasketShopping} style={{ color: "#000000", }} />
                    </Link>

                    <Link to={"/wishlist"}>
                        <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", }} />
                    </Link>

                </section>

            </div>

        </header>
    )
}
