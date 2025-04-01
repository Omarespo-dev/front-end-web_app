import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import ColorComponent from '../components/ColorComponent';

import "../style/CartPage.css"
const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [stockOutItems, setStockOutItems] = useState([]);  // stato per tracciare gli articoli esauriti
    const [alertShown, setAlertShown] = useState(false);  // stato per tenere traccia se l'alert è stato mostrato

    const navigate = useNavigate();

    // Funzione per caricare i dati dal localStorage e aggiornare lo stock
    useEffect(() => {
        const fetchUpdatedStock = async () => {
            let savedCart = JSON.parse(localStorage.getItem('cart')) || [];

            // richiesta per aggiornare lo stock di ogni prodotto
            const updatedCart = await Promise.all(savedCart.map(async (product) => {
                try {
                    // richiesta per ottenere il prodotto aggiornato dal server
                    const response = await axios.get(`http://localhost:3000/api/ecommerce/${product.slug}`);
                    const updatedProduct = response.data;

                    // Controlla se lo stock è 0 e aggiorna lo stato
                    if (updatedProduct.stock === 0) {
                        setStockOutItems((prev) => [...prev, product.id]);  // Aggiungi l'articolo esaurito
                    }

                    return {
                        ...product,
                        stock: updatedProduct.stock,  // Aggiorna lo stock
                        quantity: Math.min(product.quantity, updatedProduct.stock),  // Limita la quantità se lo stock è minore
                    };
                } catch (error) {
                    console.error("Errore durante il recupero dei dati:", error);
                    return product;  // Se errore, mantieni i dati locali
                }
            }));

            setCart(updatedCart);  // Salva il carrello aggiornato
            localStorage.setItem('cart', JSON.stringify(updatedCart));  // Salva nel localStorage
        };

        fetchUpdatedStock();
    }, []);

    // Funzione per aumentare la quantità
    const increaseQuantity = (id) => {
        const updatedCart = cart.map((product) => {
            if (product.id === id) {
                // Controlla se la quantità richiesta è maggiore dello stock
                if (product.quantity < product.stock) {
                    // Aumenta la quantità solo se lo stock lo consente
                    product.quantity += 1;
                } else { }
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

    // Mostra l'alert una sola volta se ci sono articoli esauriti
    useEffect(() => {
        if (stockOutItems.length > 0 && !alertShown) {
            alert("Alcuni prodotti nel tuo carrello sono esauriti. Rimuovili per procedere.");
            setAlertShown(true);  // Imposta lo stato per evitare che l'alert venga visualizzato nuovamente
        }
    }, [stockOutItems, alertShown]);

    // Funzione per spostare i dati del carrello alla pagina di checkout
    const handleCheckout = () => {
        console.log("Navigating to checkout...");
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
                                                <p><strong>Subtotal: € {((product.discount > 0 ? (product.price - product.price * (product.discount / 100)) : product.price) * product.quantity).toFixed(2)}</strong></p>
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

                            <button className="checkout-btn" onClick={handleCheckout} disabled={stockOutItems.length > 0}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;