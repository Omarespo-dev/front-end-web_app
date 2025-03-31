import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

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
                <div className="container-main-2">
                    <div className="container-card-newproducts">
                        {wishlist.map(product => (
                            <div className="card-container-product" key={product.id}>
                                <ProductCard productProp={product} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>La tua wishlist è vuota.</p>
            )}
        </div>
    );
}
