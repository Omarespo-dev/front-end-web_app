// ProductsList.jsx

// importo axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importo il componente Card del prodotto
import ProductCard from '../components/ProductCard';

export default function ProductsList() {

    // setto lo stato del componente
    const [products, setProducts] = useState([]);

    // funzione chiamata dei dati lista prodotti (index)
    const fetchProducts = () => {

        axios.get("http://localhost:3000/api/ecommerce")

            .then(
                res => {
                    setProducts(res.data)
                }
            )

            .catch(err => console.log(err)
            )

    }

    useEffect(fetchProducts, [])

    return products.map(

        product => {

            return (
                <div key={product.id} >
                    <ProductCard productProp={product} />
                </div>
            )
        }
    )


}