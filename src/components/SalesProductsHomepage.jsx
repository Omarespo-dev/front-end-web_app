// Importo axios per chiamata
import axios from 'axios'

//Importo useState e useEffect
import { useState, useEffect } from "react"


// Importo cuore
import Heart from './Heart';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SalesProducts() {
    // imposto lo stato per i prodotti nuovi
    const [salesProduct, setSalesProducts] = useState([]);


    // facciamo una function per fare la richiesta API di tipo get(index)
    function fetchSalesProducts() {
        const endPoint = "http://localhost:3000/api/ecommerce/sales";

        axios.get(endPoint)
            .then(res => {
                // Prendo solo i primi 4 prodotti dai dati ricevuti
                const fourProduct = [];

                for (let i = 0; i < res.data.length; i++) {

                    if (fourProduct.length < 4) {

                        fourProduct.push(res.data[i]); // Aggiungi l'oggetto all'array
                    }
                }

                // Imposto lo stato con i 4 prodotti
                setSalesProducts(fourProduct);
            })

            .catch(err => console.log(err));
    }

    // Chiamo fetchSalesProducts solo una volta quando il componente si monta
    useEffect(() => { fetchSalesProducts() }, []);



    return (<>


        {salesProduct.length === 0 ? <h2>No Products avaiable</h2> :
            <div className='card-container'>
                {salesProduct.map(product => (
                    <section className='card-set' key={product.id}>


                        <div className="sconto-percentuale">
                            <Heart />
                            <span>-{product.discount}%</span>
                        </div>

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

                        <div className='add-cart-2'>
                            <s className="sconto">$1090.00</s>
                            <div className="set-sconto">
                                <p>€ {product.price}</p>
                                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> </p>
                            </div>

                        </div>


                    </section>

                ))}

            </div>



        }


    </>
    )
}
