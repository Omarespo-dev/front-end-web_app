import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children, updateWishlistStatus }) => {
    const [wishlist, setWishlist] = useState([]);

    // Carica la wishlist dal localStorage all'inizio
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    // Funzione per aggiungere/rimuovere il prodotto
    const toggleWishlist = (product) => {
        setWishlist(prevWishlist => {
            let updatedWishlist;

            if (prevWishlist.some(item => item.id === product.id)) {
                updatedWishlist = prevWishlist.filter(item => item.id !== product.id);
            } else {
                updatedWishlist = [...prevWishlist, product];
            }

            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            if (updateWishlistStatus) {
                updateWishlistStatus();
            }
            return updatedWishlist;
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
