// ProductCard.jsx


import { Link } from "react-router-dom"
import Heart from "./Heart";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {

    const { id, name, brand, image_card, price, vote, discount } = props.productProp;

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
                        <button className='add-to-cart-btn'>
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