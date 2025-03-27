import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const initialUserData = {
    user_name: "",
    user_surname: "",
    address: "",
    city: "",
    postal_code: "",
    province: "",
    user_email: ""
};

const endpointApi = "http://localhost:3000/api/ecommerce";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(initialUserData);
    const [error, setError] = useState(null);
    const [discountCode, setDiscountCode] = useState("");

    const [cart, setCart] = useState([]);

    // Funzione per caricare i dati dal localStorage
    useEffect(() => {
        // Recupera il carrello dal localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Calcola il totale con eventuali sconti e spedizione
    const totalCartPrice = cart.reduce((sum, item) =>
        sum + (item.discount > 0 ? (item.price - (item.price * item.discount / 100)) : item.price) * item.quantity, 0
    );

    const shippingCost = totalCartPrice >= 100 ? 0 : 9.99;
    const totalPrice = (totalCartPrice + shippingCost).toFixed(2);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Controlla che tutti i campi siano compilati
        if (Object.values(userData).some(field => field.trim() === "")) {
            setError("Tutti i campi sono obbligatori.");
            return;
        }

        const orderData = {
            cart,
            userDetails: userData,
            discountCode
        };

        axios.post(endpointApi, orderData, { headers: { "Content-Type": "application/json" } })
            .then(
                // Dopo aver completato il checkout si viene reindirizzati alla home
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="checkout-page">
            <header>
                <h1>Checkout</h1>
            </header>

            {error && <p className="error">{error}</p>}

            <section className="cart-summary">
                <h2>Riepilogo Ordine</h2>
                {cart.length > 0 ? (
                    cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div>
                                {/* Eventuale immagine */}

                                {/* Prezzo e prezzo scontato per singola unità */}
                                <div className="price-details">
                                    <p><strong>{product.name}</strong></p>
                                    <p>Prezzo: € {product.price}</p>
                                    {/* Se c'è uno sconto, mostra il prezzo scontato */}
                                    {product.discount > 0 && (
                                        <p><strong>Prezzo scontato: € {(product.price - product.price * (product.discount / 100)).toFixed(2)}</strong></p>
                                    )}
                                    {/* Quantità */}
                                    <p>Quantità: {product.quantity}</p>
                                </div>
                                {/* Gestione prezzo totale per prodotto tenendo conto di sconto e quantità */}
                                <div className="product-total">
                                    <p><strong>Subotale: € {((product.discount > 0 ? (product.price - product.price * (product.discount / 100)) : product.price) * product.quantity).toFixed(2)}</strong></p>
                                </div>
                                {/* Tasto per rimuovere dal carrello */}
                                <button onClick={() => removeFromCart(product.id)}>Rimuovi</button>
                            </div>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>Il carrello è vuoto</p>
                )}
                <p>Spedizione: €{shippingCost.toFixed(2)}</p>
                <h3>Totale: €{totalPrice}</h3>
            </section>

            <section className="checkout-form">
                <h2>Inserisci i tuoi dati</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome: <input name="user_name" type="text" value={userData.user_name} onChange={handleChange} required /></label>
                    <label>Cognome: <input name="user_surname" type="text" value={userData.user_surname} onChange={handleChange} required /></label>
                    <label>Indirizzo: <input name="address" type="text" value={userData.address} onChange={handleChange} required /></label>
                    <label>Città: <input name="city" type="text" value={userData.city} onChange={handleChange} required /></label>
                    <label>CAP: <input name="postal_code" type="text" value={userData.postal_code} onChange={handleChange} required /></label>
                    <label>Provincia: <input name="province" type="text" value={userData.province} onChange={handleChange} required /></label>
                    <label>Email: <input name="user_email" type="email" value={userData.user_email} onChange={handleChange} required /></label>

                    <label>Codice Sconto (opzionale): <input name="discountCode" type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} /></label>

                    <button className="btn" type="submit">Conferma Ordine</button>
                    <Link className="btn" to="/cart">Torna al Carrello</Link>
                </form>
            </section>
        </div>
    );
};

export default CheckoutPage;
