import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Recupera la wishlist salvata in localStorage
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    return (
        <div className="wishlist-page">
            <h2>La tua Wishlist</h2>
            {wishlist.length > 0 ? (
                <ProductsList products={wishlist} />
            ) : (
                <p>La tua wishlist è vuota.</p>
            )}
        </div>
    );
}
