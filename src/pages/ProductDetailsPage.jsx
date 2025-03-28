// ProductDetailsPage.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card delle reviews
import ReviewCard from '../components/ReviewCard';

// import del componente render stelle
import RenderStars from '../components/RenderStars';

import { Link, useParams, useNavigate } from "react-router-dom"



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetailsPage() {

    // recupero lo slug del prodotto
    const { slug } = useParams();

    // setto lo stato del componente
    const [product, setProduct] = useState({});

    // funzione di chiamata all'API per il prodotto richiesto
    const fetchProduct = () => {


        axios.get("http://localhost:3000/api/ecommerce/" + slug)

            .then(
                res => {
                    setProduct(res.data)

                }
            )
            .catch(err => {
                console.log(err)
                if (err.status === 404) redirect("/404")
            }
            )
    }

    useEffect(fetchProduct, [])

    // funzione di rendering delle reviews
    const renderReviews = () => {
        return product.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    // funzione calcolo media voti delle reviews
    const calculateAverageRating = () => {
        if (!product.reviews || product.reviews.length === 0) {
            return 0;
        }

        // converto ogni voto da stringa a numero e calcolo la media
        const totalVotes = product.reviews.reduce((acc, review) => acc + parseInt(review.vote, 10), 0);
        return parseFloat((totalVotes / product.reviews.length).toFixed(1));
    };

    return (
        <>

            <div className='container-details'>

                <div className='img-container-details'>
                    <div className='img-details'>
                        <div className='img-details-1'>
                            <img src={product.image_card} alt={product.name} />

                        </div>
                        <div className='img-details-2'>
                            <section>
                                <img src="../../img/garmin_forerunner_945.png" alt="" />
                            </section>
                            <section>
                                <img src="../../img/garmin_forerunner_945.png" alt="" />
                            </section>
                            <section>
                                <img src="../../img/garmin_forerunner_945.png" alt="" />
                            </section>
                            <section>
                                <img src="../../img/garmin_forerunner_945.png" alt="" />
                            </section>

                        </div>

                    </div>

                    <div className='product-details'>
                        <h4>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h4>
                        <p><RenderStars average={calculateAverageRating()} /></p>

                        <p><img src="../../img/shop.png" alt="" />Stock {product.stock}</p>

                        <section>
                            <ul className='ul-set'>
                                <li>Brand </li>
                                <li>Hard Disk Size </li>
                                <li>CPU Model </li>
                                <li>Screen Size </li>
                                <li style={{ listStyleType: "none" }}>
                                    <a href="#">Show More <FontAwesomeIcon icon={faGreaterThan} style={{ width: "10px", marginLeft: "5px", color: "#0C68F4" }} />
                                    </a>
                                </li>
                            </ul>
                            <ul className='ul-set-none'>
                                <li>{product.brand}</li>
                                <li>{product.storage}</li>
                                <li>{product.cpu}</li>
                                <li>{product.display_size}</li>
                            </ul>
                        </section>

                    </div>

                    <div className='add-cart-details'>
                        {product.discount > 0 ?
                            <>
                                <div className='set-div-detail'>
                                    <h3>€ {(product.price - product.price * (product.discount / 100)).toFixed(2)}
                                    
                                    </h3>
                                    
                                    <span className='set-sconto-2'>
                                        <img src="../../img/discount-shape.png" alt="" />
                                        -{product.discount}%
                                    </span>
                                </div>

                                <span>
                                    Last Price
                                    <s className="sconto">€ {product.price}</s>
                                </span>

                                <button className='button-detail'>
                                    Buy now
                                </button>

                                <button className='button-detail-2'> Add to cart</button>
                                <button className='button-detail-2'> Aggiungi alla Wishlist</button>

                                <div className='technical-details'>
                                    
                                </div>
                            </>
                            :
                            <>
                                <div className='set-div-detail'>
                                    <h3>€ {(product.price - product.price * (product.discount / 100)).toFixed(2)}</h3>
                                    
                                </div>
                                <button className='button-detail'>
                                    Buy now
                                </button>

                                <button className='button-detail-2'> Add to cart</button>
                                <button className='button-detail-2'> Aggiungi alla Wishlist</button>
                            </>
                        }

                    </div>
                </div>
            </div>




            {/* Galleria immagini */}
            {product.gallery && product.gallery.length > 0 && (
                <section>
                    <h3>Gallery</h3>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {product.gallery.map((imgUrl, index) => (
                            <img
                                key={index}
                                src={imgUrl}
                                alt={`Gallery ${index}`}
                                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                            />
                        ))}
                    </div>
                </section>
            )}
            <div>
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>{product.storage}</p>
                <p>{product.storage_type}</p>
                <p>{product.cpu}</p>
                <p>{product.ram}</p>
                <p>{product.battery}</p>
                <p>{product.battery_type}</p>
                <p>{product.display_size}</p>
                <p>{product.display_resolution}</p>
                <p>{product.os}</p>
                <p>{product.charging_type}</p>
                <p>{product.dimensions}</p>
                <p>{product.notes}</p>

                <section>

                    <h4>Our community reviews</h4>
                    <div>
                        <h6>Average Rating: <RenderStars average={calculateAverageRating()} /></h6>
                    </div>

                    <div>
                        {renderReviews()}
                    </div>
                </section>
            </div>
        </>
    )
}

