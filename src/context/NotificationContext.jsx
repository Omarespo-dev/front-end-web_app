import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");
    const [cartNotEmpty, setCartNotEmpty] = useState(false);

    const showNotification = (message, type = "success") => {
        console.log("Notification:", message);
        setNotificationType(type);
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);
    };

    const updateCartStatus = () => {
        const cartData = localStorage.getItem('cart');
        const cart = cartData ? JSON.parse(cartData) : [];
        setCartNotEmpty(cart.length > 0);
    };

    useEffect(() => {
        updateCartStatus();
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification, cartNotEmpty, updateCartStatus }}>
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
