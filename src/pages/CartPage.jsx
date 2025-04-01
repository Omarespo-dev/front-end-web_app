import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ColorComponent from '../components/ColorComponent';

import "../style/CartPage.css"
const CartPage = () => {
    const [cart, setCart] = useState([]);

    

    // Funzione per caricare i dati dal localStorage
    useEffect(() => {
        // Recupera il carrello dal localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Funzione per aumentare la quantità
    const increaseQuantity = (id) => {
        const updatedCart = cart.map((product) => {
            if (product.id === id) {
                // Incrementa la quantità
                product.quantity += 1;
            }
            return product;
        });

        // Aggiorna il carrello nel localStorage e nello stato
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Funzione per diminuire la quantità
    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((product) => {
            if (product.id === id && product.quantity > 1) {
                // Decrementa la quantità solo se maggiore di 1
                product.quantity -= 1;
            }
            return product;
        });

        // Aggiorna il carrello nel localStorage e nello stato
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Funzione per rimuovere un prodotto dal carrello
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Salva il nuovo carrello
    };

    // Funzione per calcolare il totale
    const calculateTotal = () => {
        // Recupera il carrello dal localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Calcola il totale
        let total = 0;

        cart.forEach(product => {
            const { price, discount, quantity } = product;

            // Se il prodotto ha uno sconto, applicalo
            let finalPrice = price;

            if (discount > 0) {
                finalPrice = price - (price * discount / 100); // Applica lo sconto
            }

            // Aggiungi il prezzo finale (con sconto) moltiplicato per la quantità
            total += finalPrice * quantity;
        });

        return total.toFixed(2); // Restituisci il totale formattato con 2 decimali
    };

    // Funzione per spostare i dati del carrello alla pagina di checkout
    const handleCheckout = () => {
        navigate('/checkout', { state: { cart } });
    };



    return (
        <div className="cart-page">
            <div className='set-cart'>
                <div className="cart-items">
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <div key={product.id} className="cart-item">
                                <div className='cart'>
                                    {/* Eventuale immagine */}
                                    <section className='image-card-cart'>
                                        <img src={product.image_card} alt={product.name} />
                                    </section>

                                    {/* Prezzo e dettagli */}
                                    <div className="price-details">
                                        <h3>{product.name}</h3>
                                        <p className='set-shop-icon'><img src="../../img/shop.png" alt="" />Stock {product.stock}</p>

                                        {/* Usa il componente per visualizzare il colore */}
                                        <ColorComponent productColor={product.color} />

                                        {/* Se c'è uno sconto, mostra il prezzo scontato */}
                                        {product.discount > 0 ? (
                                            <div className='div-discount'>
                                                <p><s>€ {product.price} </s> € {(product.price - product.price * (product.discount / 100)).toFixed(2)}</p>
                                            </div>
                                        ) : (
                                            <div className='div-price'>
                                                <p>€ {product.price}</p>
                                            </div>
                                        )}

                                        <div className="quantity-control">
                                            {/* Gestione prezzo totale per prodotto */}
                                            <div className="product-total">
                                                <p><strong>Subtotale: € {((product.discount > 0 ? (product.price - product.price * (product.discount / 100)) : product.price) * product.quantity).toFixed(2)}</strong></p>
                                            </div>


                                            <section>
                                                <button className='button-delete' onClick={() => removeFromCart(product.id)}>
                                                    <img src="../../img/trash.png" alt="" />
                                                </button>
                                                <button className='button-delete' onClick={() => decreaseQuantity(product.id)}>-</button>
                                                <span>{product.quantity}</span>
                                                <button className='button-delete' onClick={() => increaseQuantity(product.id)}>+</button>
                                            </section>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <main style={{ height: "100vh" }}>
                            <h2>Il carrello è vuoto</h2>
                        </main>
                    )}
                </div>

                {/* Se il carrello ha elementi, mostra il riepilogo */}
                {cart.length > 0 && (
                    <div className="cart-summary">
                        <h3>Payment Details</h3>
                        <div className="cart-actions">
                            

                            <section>
                                <h4>Grand Total: <span>€{calculateTotal()}</span></h4>
                            </section>

                            <Link to="/checkout">
                                <button className="checkout-btn">Checkout</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;