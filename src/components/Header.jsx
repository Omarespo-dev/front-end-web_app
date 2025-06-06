import React, { useState } from 'react';
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import { NotificationContext } from '../context/NotificationContext';
import { WishlistContext } from '../context/WishlistContext'; // Importa WishlistContext
import "../style/Header.css";

export default function Header() {

    // notifica carrello
    const { cartNotEmpty } = useContext(NotificationContext);

    // Accedi alla wishlist dal contesto
    const { wishlist } = useContext(WishlistContext); // Aggiungi questa riga per ottenere la wishlist dal contesto

    // Imposto stato per il burger menu
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className='container_header'>
                    <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="img-link-set">
                        <img src="../../img/logo_orange.png" alt="" />
                    </Link>

                    <div className='link-header'>
                        <NavLink to={"/"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink to={"/products"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Products</NavLink>
                        <NavLink to={"/aboutus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                        <NavLink to={"/contactus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
                    </div>

                    <section className='icon-header'>
                        <SearchBar />

                        <Link to={"/cart"} onClick={() => window.scrollTo(0, 0)}>
                            <div className="header-icon">
                                <FontAwesomeIcon icon={faBasketShopping} style={{ color: "#000000" }} />
                                {cartNotEmpty && <span className="header-dot"></span>}  {/* Pallino rosso per il carrello */}
                            </div>
                        </Link>

                        <Link to={"/wishlist"} onClick={() => window.scrollTo(0, 0)}>
                            <div className="header-icon">
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
                                {wishlist.length > 0 && <span className="header-dot"></span>}  {/* Pallino rosso per la wishlist */}
                            </div>
                        </Link>
                    </section>
                </div>

                <div className='container-nav'>
                    <img src="../../img/burger-menu-svgrepo-com.svg" alt="" onClick={toggleMenu} className='burgerr' />

                    <div className={isOpen ? "nav-set" : "aperto-burger"}>
                        <img src="../../img/x-symbol-svgrepo-com.svg" alt="" style={{ width: "50px", cursor: "pointer" }} onClick={toggleMenu} />

                        <div className='link-header-responsive'>
                            <NavLink to={"/"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                            <NavLink to={"/products"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Products</NavLink>
                            <NavLink to={"/aboutus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink>
                            <NavLink to={"/contactus"} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
                        </div>
                    </div>

                    <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                        <img src="../../img/logo_orange.png" alt="" className="img-link-set-2" />
                    </Link>

                    <section className='icon-header-nav'>
                        <SearchBar />

                        <Link to={"/cart"} onClick={() => window.scrollTo(0, 0)}>
                            <div className="header-icon">
                                <FontAwesomeIcon icon={faBasketShopping} style={{ color: "#000000" }} />
                                {cartNotEmpty && <span className="header-dot"></span>}  {/* Pallino rosso per il carrello */}
                            </div>
                        </Link>

                        <Link to={"/wishlist"} onClick={() => window.scrollTo(0, 0)}>
                            <div className="header-icon">
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
                                {wishlist.length > 0 && <span className="header-dot"></span>}  {/* Pallino rosso per la wishlist */}
                            </div>
                        </Link>
                    </section>
                </div>
            </header>
        </>
    );
}
