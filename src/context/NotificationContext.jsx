import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");
    const [cartNotEmpty, setCartNotEmpty] = useState(false);
    const [wishlistNotEmpty, setWishlistNotEmpty] = useState(false); // Nuovo stato per la wishlist

    const showNotification = (message, type = "success") => {
        console.log("Notification:", message);
        setNotificationType(type);
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);
    };

    // Funzione per aggiornare lo stato del carrello
    const updateCartStatus = () => {
        const cartData = localStorage.getItem('cart');
        const cart = cartData ? JSON.parse(cartData) : [];
        setCartNotEmpty(cart.length > 0);
    };

    // Funzione per aggiornare lo stato della wishlist
    const updateWishlistStatus = () => {
        const wishlistData = localStorage.getItem('wishlist');
        const wishlist = wishlistData ? JSON.parse(wishlistData) : [];
        setWishlistNotEmpty(wishlist.length > 0); // Verifica se la wishlist contiene articoli
    };

    // Effetto che si attiva al caricamento per aggiornare lo stato del carrello e della wishlist
    useEffect(() => {
        updateCartStatus();
        updateWishlistStatus();
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification, cartNotEmpty, wishlistNotEmpty, updateCartStatus, updateWishlistStatus }}>
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
