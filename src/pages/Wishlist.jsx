import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { WishlistContext } from "../context/WishlistContext";
import { NotificationContext } from "../context/NotificationContext"; // Importa NotificationContext

export default function Wishlist() {
    const { wishlist } = useContext(WishlistContext);
    const { wishlistNotEmpty } = useContext(NotificationContext); // Accedi a wishlistNotEmpty dal contesto

    return (
        <div className="wishlist-page">
            {wishlist.length > 0 ? (  // Usa wishlistNotEmpty per determinare cosa mostrare
                <>
                    <h2 style={{ textAlign: "center" }}>Your Wishlist</h2>
                    <div className="container-main-2">
                        <div className="container-card-newproducts">
                            {wishlist.map((product) => (
                                <div className="card-container-product" key={product.id}>
                                    <ProductCard productProp={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <main style={{ height: "100vh" }}>
                    <h2 style={{ textAlign: "center" }}>Your wishlist is empty</h2>
                </main>
            )}
        </div>
    );
}
