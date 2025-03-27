// Importo axios per chiamata
import axios from 'axios'

//Importo useState e useEffect
import { useState, useEffect } from "react"

// Importo ProductCard
import ProductCard from './ProductCard';

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
                    <ProductCard key={product.id} productProp={product} />
                ))}
            </div>
        }
    </>
    )
}
