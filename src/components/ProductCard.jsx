// ProductCard.jsx


import { Link } from "react-router-dom"
import Heart from "./Heart";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {

    const { id, name, brand, image_card, price, vote, discount } = props.productProp;

    // Funzione per aggiungere il prodotto al carrello
    const addToCart = () => {
        // Recupera il carrello dal localStorage (se esiste)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verifica se il prodotto è già nel carrello
        const productIndex = cart.findIndex(item => item.id === id);

        if (productIndex !== -1) {
            // Se il prodotto è già nel carrello, aumenta la quantità
            cart[productIndex].quantity += 1;
        } else {
            // Se il prodotto non è nel carrello, aggiungilo
            const newProduct = {
                ...props.productProp, // Copia tutto l'oggetto prodotto
                quantity: 1,  // Aggiungi la quantità
            };
            cart.push(newProduct);
        }

        // Salva il carrello nel localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Prodotto aggiunto al carrello:", newProduct);
        // Log del carrello aggiornato
        console.log("Carrello aggiornato:", cart);
    };

    return (
        <>

            <Link to={`/product/${id}`} className="set-link-product">
                {discount > 0 ?
                    <section className='card-set'>


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

                        <div className='hover-elements'>
                            <button
                                className='add-to-cart-btn'
                                onClick={addToCart}>
                                <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                            </button>
                        </div>

                        <div className='add-cart-2'>
                            <s className="sconto">$1090.00</s>
                            <div className="set-sconto">
                                <p>€ {price}</p>
                                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> </p>
                            </div>

                        </div>


                    </section> :
                    <section className='card-set'>

                        <Heart />

                        <div className='img-set-card'>
                            <img src={image_card} alt={name} />
                        </div>

                        <section>
                            <p>{name}</p>
                        </section>

                        <div className='hover-elements'>
                            <button className='add-to-cart-btn'>
                                <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                            </button>
                        </div>

                        <div className='add-cart'>
                            <p>€ {price}</p>
                            <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> {vote}</p>
                        </div>
                    </section>}

            </Link>
        </>
    )
}





export default ProductCard