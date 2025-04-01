import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBasketShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'react-router-dom';

import SearchBar from "../components/SearchBar";

import "../style/Header.css"

export default function Header() {

    // Imposto stato per il burger menu
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen)
    }

    

    return (<>
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



            <div className='container-nav'>
                
                <img src="../../img/burger-menu-svgrepo-com.svg" alt=""  onClick={toggleMenu} className='burgerr'/>
                
                <div className={isOpen ? "nav-set" : "aperto-burger"}>
                    
                    <img src="../../img/x-symbol-svgrepo-com.svg" alt=""  style={{width:"50px",cursor:"pointer"}}  onClick={toggleMenu}/>

                    <div className='link-header-responsive'>
                        
                        <NavLink to={"/"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink to={"/products"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Products</NavLink>
                        <NavLink to={"/aboutus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                        <NavLink to={"/contactus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>

                    </div>
                </div>



                <Link to={"/"} onClick={() => window.scrollTo(0, 0)} ><img src="../../img/logo_orange.png" alt="" className="img-link-set-2" /></Link>



                <section className='icon-header-nav'>

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




    </>




    )
}
