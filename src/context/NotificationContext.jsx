import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");
    const [cart, setCart] = useState([]);

    // Caricare il carrello dal localStorage all'inizio
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // Salvare il carrello su localStorage ogni volta che cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Funzione per mostrare notifiche
    const showNotification = (message, type = "success") => {
        setNotificationType(type);
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);
    };

    // Funzione per aggiungere prodotti al carrello
    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.slug === product.slug);
            if (existingItem) {
                return prev.map((item) =>
                    item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        showNotification("Product added to cart!");
    };

    // Funzione per rimuovere prodotti dal carrello
    const removeFromCart = (slug) => {
        setCart((prev) => prev.filter((item) => item.slug !== slug));
    };

    // Funzione per calcolare il numero totale di elementi nel carrello
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <NotificationContext.Provider value={{ showNotification, cart, addToCart, removeFromCart, cartCount }}>
            {children}
            {notification && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: notificationType === "error" ? "#FF0000" : "#0C68F4",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.1)",
                    zIndex: 9999,
                    transition: 'opacity 0.3s ease-in-out',
                }}>
                    {notification}
                </div>
            )}
        </NotificationContext.Provider>
    );
};
