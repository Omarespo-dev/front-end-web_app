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

import ColorComponent from '../components/ColorComponent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

import "../style/PageDetails.css"
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

    // Funzione per aggiungere il prodotto al carrello
    const addToCart = (event) => {
        event.stopPropagation();  // Impedisce la propagazione dell'evento di clic, quindi evita di andare alla pagina di dettaglio

        // Recupera il carrello dal localStorage (se esiste)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verifica se il prodotto è già nel carrello
        const productIndex = cart.findIndex(item => item.slug === slug);

        // Definizione newProduct
        const newProduct = {
            ...product, // Copia tutto l'oggetto prodotto
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
        <>

            <div className='container-details'>

                <div className='img-container-details'>
                    <div className='img-details'>
                        <div className='img-details-1'>
                            <img src={product.image_card} alt={product.name} />

                        </div>


                        {/* Galleria immagini */}
                        {product.gallery && product.gallery.length > 0 && (

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                {product.gallery.map((imgUrl, index) => (
                                    <img
                                        key={index}
                                        src={imgUrl}
                                        alt={`Gallery ${index}`}
                                        style={{ width: "150px", height: "100px", borderRadius: "8px", border: "1px solid gray", padding: "10px", marginRight: "10px" }}
                                    />
                                ))}
                            </div>

                        )}

                    </div>

                    <div className='product-details'>
                        <h4>{product.name}</h4>
                        <p><RenderStars average={calculateAverageRating()} /></p>

                        <p><img src="../../img/shop.png" alt="" />Stock {product.stock}</p>

                        {/* Usa il componente per visualizzare il colore  */}
                        <span><ColorComponent productColor={product.color} /></span>

                        <section>
                            <ul className='ul-set'>
                                <li>Brand </li>
                                <li>Hard Disk Size </li>
                                <li>CPU Model </li>
                                <li>Screen Size </li>
                                <li style={{ listStyleType: "none" }}>
                                    <a href="#section-technical">Show More <FontAwesomeIcon icon={faGreaterThan} style={{ width: "10px", marginLeft: "5px", color: "#0C68F4" }} />
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

                                <Link to={"/checkout"} onClick={addToCart}>
                                    <button className='button-detail'>
                                        Buy now
                                    </button>
                                </Link>

                                <button className='button-detail-2' onClick={addToCart}> Add to cart</button>
                                <button className='button-detail-2'> Aggiungi alla Wishlist</button>

                            </>
                            :
                            <>
                                <div className='set-div-detail'>
                                    <h3>€ {(product.price - product.price * (product.discount / 100)).toFixed(2)}</h3>

                                </div>
                                <Link to={"/checkout"} onClick={addToCart}>
                                    <button className='button-detail'>
                                        Buy now
                                    </button>
                                </Link>
                                <button className='button-detail-2' onClick={addToCart} > Add to cart</button>
                                <button className='button-detail-2'> Aggiungi alla Wishlist</button>
                            </>
                        }

                    </div>
                </div>
            </div>






            <div className='container-technical-details'>
                <div className='technical-details'>
                    <div className='sub-container'>
                        <div id='section-technical' className='linkaggio-technical'>
                            <h4>Technical Details</h4>
                        </div>

                        <p className='set-p-detail'> Display <span> {product.display_size} {product.display_resolution}</span></p>

                        <p className='set-p-detail-2'> Cpu <span> {product.cpu} </span></p>

                        <p className='set-p-detail'> Storage <span> {product.storage} </span></p>

                        <p className='set-p-detail-2'> Battery <span> {product.battery} </span></p>

                        <p className='set-p-detail'> Battery-Type <span> {product.battery_type} </span></p>

                        <p className='set-p-detail-2'> Display-Size <span> {product.display_size} </span></p>

                        <p className='set-p-detail'> Display-Resolution <span> {product.display_resolution} </span></p>

                        <p className='set-p-detail-2'> OS <span> {product.os} </span></p>

                        <p className='set-p-detail'> Charging-type <span> {product.charging_type} </span></p>

                        <p className='set-p-detail-2'> Dimensions <span> {product.dimensions} </span></p>

                        <p className='set-p-detail'> Note <span> {product.notes} </span></p>



                        <section className='set-reviews'>

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                <h4>Our community reviews:</h4>
                                <h4>Average Rating: <RenderStars average={calculateAverageRating()} /></h4>
                            </div>



                            {renderReviews()}

                        </section>


                    </div>
                </div>
            </div>
        </>
    )
}

