// Importo axios per chiamata
import axios from 'axios'

//Importo useState e useEffect
import { useState, useEffect } from "react"


// Importo cuore
import Heart from '../components/Heart';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function NewProductsList() {
    // imposto lo stato per i prodotti nuovi
    const [newProducts, setNewProducts] = useState([]);


    // facciamo una function per fare la richiesta API di tipo get(index)
    function fetchNewProducts() {
        const endPoint = "http://localhost:3000/api/ecommerce/newarrive"

        axios.get(endPoint)
            .then(res => { setNewProducts(res.data) })
            .catch(err => console.log(err)
            )
    }

    useEffect(fetchNewProducts, [])

    return (
        <>
            {newProducts.map(product => (
                <section className='card-set' key={product.id}>

                    <Heart />

                    <div className='img-set-card'>
                        <img src={product.image_card} alt="" />
                    </div>

                    <section>
                        <p>{product.name}</p>
                    </section>

                    <div className='hover-elements'>
                        <button className='add-to-cart-btn'>
                            <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                        </button>
                    </div>

                    <div className='add-cart'>
                        <p>€ {product.price}</p>
                        <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> {product.vote}</p>
                    </div>


                </section>
            ))}

        </>

    )
}
