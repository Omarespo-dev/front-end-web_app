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

export default function ProductDetailsPage() {

    // recupero l'id del prodotto
    const { id } = useParams();

    // setto lo stato del componente
    const [product, setProduct] = useState({});

    // funzione di chiamata all'API per il prodotto richiesto
    const fetchProduct = () => {


        axios.get("http://localhost:3000/api/ecommerce/" + id)

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
            <header>
                <div>
                    <img src={product.image_card} alt={product.name} />

                </div>


                <h2><p>{product.price}</p></h2>
            </header>
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
                    <header>
                        <h4>Our community reviews</h4>
                        <div>
                            <h6>Average Rating: <RenderStars average={calculateAverageRating()} /></h6>
                        </div>
                    </header>
                    <div>
                        {renderReviews()}
                    </div>
                </section>
            </div>
        </>
    )
}

