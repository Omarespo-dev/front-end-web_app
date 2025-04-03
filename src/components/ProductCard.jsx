import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import Heart from "./Heart";

const ProductCard = (props) => {
    const { wishlist, toggleWishlist } = useContext(WishlistContext);
    const { slug, name, brand, image_card, price, discount, id, stock } = props.productProp;
    const { showNotification, addToCart } = useContext(NotificationContext); // Usa il context aggiornato

    const handleAddToCart = (event) => {
        event.stopPropagation();
        if (stock === 0) {
            showNotification("This product is out of stock and cannot be added to your cart", "error");
            return;
        }
        addToCart(props.productProp);  // Usa la funzione del context
    };

    return (
        <section className='card-set'>
            <Heart product={props.productProp} />
            <Link to={`/product/${slug}`} className="set-link-product" onClick={() => window.scrollTo(0, 0)}>
                <div className='img-set-card'>
                    <img src={image_card} alt={name} />
                </div>
            </Link>
            <section>
                <p>{brand} {name}</p>
            </section>
            <div className='add-cart'>
                <p>€ {discount > 0 ? (price - price * (discount / 100)).toFixed(2) : price}</p>
            </div>

            <div className='hover-elements'>
                <button
                    className={`add-to-cart-btn ${stock === 0 ? 'disabled' : ''}`}
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                >
                    <img src="../../img/shopping-cart.png" alt="" />{stock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
            </div>
        </section>
    );
};

export default ProductCard;
