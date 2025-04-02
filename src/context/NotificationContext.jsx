import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");  // Nuovo stato per il tipo di notifica (successo, errore, ecc.)

    const showNotification = (message, type = "success") => {
        console.log("Notification:", message);
        setNotificationType(type); // Imposta il tipo di notifica
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);  // Scompare dopo 3 secondi
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: notificationType === "error" ? "#FF0000" : "#4caf50",  // Rosso per errore, verde per successo
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: 9999,
                    // transition: 'opacity 0.3s ease-in-out',
                }}>
                    {notification}
                </div>
            )}
        </NotificationContext.Provider>
    );
};
