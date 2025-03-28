// Importo axios per chiamata
import axios from 'axios'

//Importo useState e useEffect
import { useState, useEffect } from "react"

// Importo ProductCard
import ProductCard from './ProductCard';

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

    return (<>


        {newProducts.length === 0 ? <h2>No Products avaiable</h2> :
            <div className='card-container'>
                {newProducts.map(product => (
                    <ProductCard key={product.slug} productProp={product} />
                ))}
            </div>
        }
    </>
    )
}
