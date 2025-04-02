// ProductCard.jsx
import { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { NotificationContext } from "../context/NotificationContext";

import { Link } from "react-router-dom"
import Heart from "./Heart";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {

    const { wishlist, toggleWishlist } = useContext(WishlistContext); // Usa il context

    const { slug, name, brand, image_card, price, discount, id, stock } = props.productProp;

    // context gestione notifiche carrello
    const { showNotification } = useContext(NotificationContext);

    // Funzione per aggiungere il prodotto al carrello
    const addToCart = (event) => {
        event.stopPropagation();  // Impedisce la propagazione dell'evento di clic, quindi evita di andare alla pagina di dettaglio

        if (stock === 0) {
            showNotification("This product is out of stock and cannot be added to your cart", "error");
            return;
        }

        // Recupera il carrello dal localStorage (se esiste)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verifica se il prodotto è già nel carrello
        const productIndex = cart.findIndex(item => item.slug === slug);

        // Definizione newProduct
        const newProduct = {
            ...props.productProp, // Copia tutto l'oggetto prodotto
            quantity: 1,  // Aggiungi la quantità
        };

        if (productIndex !== -1) {
            // Se il prodotto è già nel carrello, aumenta la quantità
            cart[productIndex].quantity += 1;
            showNotification(`Quantity updated! Now you have ${cart[productIndex].quantity} in the cart.`);
        } else {
            // Se il prodotto non è nel carrello, aggiungilo
            cart.push(newProduct);
            showNotification("Product added to cart!");
        }

        // Salva il carrello nel localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Log del carrello aggiornato
        console.log("Carrello aggiornato:");
    };

    return (
        <section className='card-set'>
            {/* Cliccando sulla card, si naviga al dettaglio prodotto */}

            {discount > 0 ?
                <>
                    <div className="sconto-percentuale">
                        <Heart product={props.productProp} />
                        <span>-{discount}%</span>
                    </div>
                    <Link to={`/product/${slug}`} className="set-link-product" onClick={() => window.scrollTo(0, 0)}>
                        <div className='img-set-card'>
                            <img src={image_card} alt="" />
                        </div>
                    </Link>
                    <section>
                        <p>{brand} {name}</p>
                    </section>

                    <div className='add-cart-2'>
                        <s className="sconto">€ {price}</s>
                        <div className="set-sconto">
                            <p>€ {(price - price * (discount / 100)).toFixed(2)}</p>
                            {/* <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> </p> */}
                        </div>
                    </div>
                </>
                :
                <>
                    <Heart product={props.productProp} />
                    <Link to={`/product/${slug}`} className="set-link-product" onClick={() => window.scrollTo(0, 0)}>
                        <div className='img-set-card'>
                            <img src={image_card} alt={name} />
                        </div>
                    </Link>
                    <section>
                        <p>{brand} {name}</p>
                    </section>

                    <div className='add-cart'>
                        <p>€ {price}</p>
                        {/* <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> {vote}</p> */}
                    </div>
                </>
            }


            {/* Aggiungi al carrello - questo non fa navigare alla pagina di dettaglio */}
            <div className='hover-elements'>
                <button
                    className={`add-to-cart-btn ${stock === 0 ? 'disabled' : ''}`}
                    onClick={addToCart}
                    disabled={stock === 0}
                >
                    <img src="../../img/shopping-cart.png" alt="" />{stock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
            </div>
        </section>
    );
}

export default ProductCard;
