import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // Carica la wishlist dal localStorage all'inizio
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    // Funzione per aggiungere/rimuovere il prodotto
    const toggleWishlist = (product) => {
        let updatedWishlist = [...wishlist];

        if (wishlist.some(item => item.id === product.id)) {
            updatedWishlist = wishlist.filter(item => item.id !== product.id);
        } else {
            updatedWishlist.push(product);
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
