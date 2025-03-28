// ProductCard.jsx


import { Link } from "react-router-dom"
import Heart from "./Heart";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {

    const { slug, name, brand, image_card, price, vote, discount } = props.productProp;

    // Funzione per aggiungere il prodotto al carrello
    const addToCart = (event) => {
        event.stopPropagation();  // Impedisce la propagazione dell'evento di clic, quindi evita di andare alla pagina di dettaglio

        // Recupera il carrello dal localStorage (se esiste)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verifica se il prodotto è già nel carrello
        const productIndex = cart.findIndex(item => item.slug === slug);

        // Definizione newProduct
        const newProduct = {
            ...props.productProp, // Copia tutto l'oggetto prodotto
            quantity: 1,  // Aggiungi la quantità
        };

        if (productIndex !== -1) {
            // Se il prodotto è già nel carrello, aumenta la quantità
            cart[productIndex].quantity += 1;
        } else {
            // Se il prodotto non è nel carrello, aggiungilo
            cart.push(newProduct);
        }

        // Salva il carrello nel localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Prodotto aggiunto al carrello:", newProduct);
        // Log del carrello aggiornato
        console.log("Carrello aggiornato:", cart);
    };

    return (
        <section className='card-set'>
            {/* Cliccando sulla card, si naviga al dettaglio prodotto */}
            <Link to={`/product/${slug}`} className="set-link-product">
                {discount > 0 ?
                    <>
                        <div className="sconto-percentuale">
                            <Heart />
                            <span>-{discount}%</span>
                        </div>

                        <div className='img-set-card'>
                            <img src={image_card} alt="" />
                        </div>

                        <section>
                            <p>{name}</p>
                        </section>

                        <div className='add-cart-2'>
                            <s className="sconto">€ {price}</s>
                            <div className="set-sconto">
                                <p>€ {(price - price * (discount / 100)).toFixed(2)}</p>
                                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> </p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <Heart />

                        <div className='img-set-card'>
                            <img src={image_card} alt={name} />
                        </div>

                        <section>
                            <p>{name}</p>
                        </section>

                        <div className='add-cart'>
                            <p>€ {price}</p>
                            <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> {vote}</p>
                        </div>
                    </>
                }
            </Link>

            {/* Aggiungi al carrello - questo non fa navigare alla pagina di dettaglio */}
            <div className='hover-elements'>
                <button className='add-to-cart-btn' onClick={addToCart}>
                    <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                </button>
            </div>
        </section>
    );
}

export default ProductCard;
