import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div className="wishlist-page">
            <h2>Your Wishlist</h2>

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
                <main style={{ height: "100vh" }}>
                    <h2>Your wishlist is empty</h2>
                </main>
            )}
        </div>
    );
}
