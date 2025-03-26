// ProductsList.jsx

import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom";
import ProductCard from '../components/ProductCard';

export default function ProductsList() {

    // ottengo la categoria dall' url
    const { category } = useParams();

    // ottengo la query string dalla URL (per la ricerca)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("query");

    // imposto lo stato per i prodotti
    const [products, setProducts] = useState([]);

    // funzione per chiamare i dati della lista prodotti
    const fetchProducts = () => {
        let url = "http://localhost:3000/api/ecommerce";

        // se esiste una categoria, la aggiungo all'URL
        if (category) {
            url += `/${category}`;
        }

        // se esiste una query di ricerca, la aggiungo all'URL
        if (searchQuery) {
            url += `?query=${searchQuery}`;
        }

        // chiamata API
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                if (err.response) {

                    console.error(err.response.data);
                }
            });
    };

    // eseguo fetch ogni volta che cambia la categoria o la query
    useEffect(fetchProducts, [category, searchQuery]);

    return (
        <div>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id}>
                        <ProductCard productProp={product} />
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
