import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

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
