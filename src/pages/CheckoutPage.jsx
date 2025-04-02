import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorComponent from "../components/ColorComponent";

import "../style/CheckoutPage.css"


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

    const shippingCost = totalCartPrice >= 1000 ? 0 : 9.99;
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

        // Calcola il prezzo scontato per ogni prodotto
        const updatedCart = cart.map((product) => {
            const discountedPrice = product.discount > 0
                ? (product.price - (product.price * product.discount / 100)).toFixed(2)
                : product.price;
            return { ...product, price: discountedPrice }; // Aggiungi il prezzo scontato
        });

        const orderData = {
            cart: updatedCart,
            userDetails: userData,
            discountCode: discountCode.trim() !== "" ? discountCode : null,  // Evita stringhe vuote
            shippingCost
        };

        console.log("Dati inviati: ", orderData);

        axios.post(endpointApi, orderData, { headers: { "Content-Type": "application/json" } })
            .then(() => {
                // Dopo aver completato l'ordine si svuota il carrello
                localStorage.removeItem('cart'); // Rimuove il carrello da localstorage
                setCart([]); // Svuota lo stato del carrello

                // Dopo aver completato il checkout si viene reindirizzati alla home
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="checkout-page">
            <h2 style={{ textAlign: "center", marginRight: "40px" }}>Enter your billing information</h2>
            <section className="checkout-form">

                <form>

                    <label>
                        Name:
                        <input name="user_name" type="text" value={userData.user_name} onChange={handleChange} required />
                    </label>


                    <label>
                        Surname:
                        <input name="user_surname" type="text" value={userData.user_surname} onChange={handleChange} required />
                    </label>


                    <label>
                        Address:
                        <input name="address" type="text" value={userData.address} onChange={handleChange} required />
                    </label>


                    <label>
                        City:
                        <input name="city" type="text" value={userData.city} onChange={handleChange} required />
                    </label>


                    <label>
                        City Code:
                        <input name="postal_code" type="text" value={userData.postal_code} onChange={handleChange} required />
                    </label>


                    <label>
                        Province:
                        <input name="province" type="text" value={userData.province} onChange={handleChange} required />
                    </label>


                    <label>
                        Email:
                        <input name="user_email" type="email" value={userData.user_email} onChange={handleChange} required />
                    </label>

                </form>
            </section>

            <h2 style={{ textAlign: "center", margin: "0", marginTop: "50px" }}>Order summary</h2>
            <section className="set-cart-checkout">
                <div className="cart-items-check">
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <div key={product.id} className="cart-item">
                                <div className="cart">
                                    <section className="image-card-cart">
                                        <img src={product.image_card} alt={product.name} />
                                    </section>
                                    <div className="price-details">
                                        <h3>{product.name}</h3>
                                        <ColorComponent productColor={product.color} />

                                        {product.discount > 0 ? (
                                            <div className="div-discount">
                                                <p><s>€ {product.price} </s> € {(product.price - product.price * (product.discount / 100)).toFixed(2)}</p>
                                            </div>
                                        ) : (
                                            <div className="div-price">
                                                <p>€ {product.price}</p>
                                            </div>
                                        )}

                                        <p>Quantity: {product.quantity}</p>

                                        <div className="product-total">
                                            <p><strong>Subtotal: € {((product.discount > 0 ? (product.price - product.price * (product.discount / 100)) : product.price) * product.quantity).toFixed(2)}</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                    {/* <p>Spedizione: €{shippingCost.toFixed(2)}</p>
                    <h3>Totale: €{totalPrice}</h3> */}
                </div>

                {/* Dettagli di pagamento */}
                {cart.length > 0 && (
                    <div className="cart-summary-checkout">
                        <h3>Payment Details</h3>
                        <div className="cart-actions">
                            <p>Subtotal: <span>€ {totalCartPrice.toFixed(2)} </span></p>
                            <p>Discount <span>N/A</span></p>
                            <p>Shipment <span>{shippingCost > 0 ? `€${shippingCost.toFixed(2)}` : "Free"}</span></p>

                            <section>
                                <h4>Grand Total: <span>€{totalPrice}</span></h4>
                            </section>


                            Discount Code (optional):
                            <label >
                                <input className="checkout-btn" style={{ backgroundColor: "white",color:"black" }} name="discountCode" type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />

                            </label>
                            <button className="checkout-btn">Apply</button>

                            <button onClick={handleSubmit} className="checkout-btn">Buy</button>

                        </div>
                    </div>
                )}
                <Link to="/cart" className="checkout-btn-turn-cart" onClick={() => window.scrollTo(0, 0)}>Return to Cart</Link>
            </section>



        </div>
    );
};

export default CheckoutPage;
