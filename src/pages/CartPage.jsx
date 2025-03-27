import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    // Funzione per caricare i dati dal localStorage
    useEffect(() => {
        // Recupera il carrello dal localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

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

    return (
        <div className="cart-page">
            <h2>Il tuo Carrello</h2>
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div>
                                <p><strong>{product.name}</strong></p>
                                <p>Prezzo: € {product.price}</p>
                                {/* Se c'è uno sconto, mostra il prezzo scontato */}
                                {product.discount > 0 && (
                                    <p><strong>Prezzo scontato: € {(product.price - product.price * (product.discount / 100)).toFixed(2)}</strong></p>
                                )}
                                <p>Quantità: {product.quantity}</p>
                                <button onClick={() => removeFromCart(product.id)}>Rimuovi</button>
                            </div>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>Il carrello è vuoto</p>
                )}
            </div>

            {cart.length > 0 && (
                <div className="cart-summary">
                    <h3>Totale: € {calculateTotal()}</h3>
                    <div className="cart-actions">
                        <Link to="/checkout">
                            <button className="checkout-btn">Procedi al checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;