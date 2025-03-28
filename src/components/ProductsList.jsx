import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import ProductCard from '../components/ProductCard';

export default function ProductsList({ category, searchQuery, query, sortBy }) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // uso "query" per la ricerca globale e "searchQuery" per filtrare i prodotti
    const finalSearchQuery = query || searchQuery || "";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let url = "http://localhost:3000/api/ecommerce";

            if (finalSearchQuery) {
                url += `/search?query=${finalSearchQuery}`;
            } else if (category) {
                url += `/${category}`;
            }

            // aggiungo sortBy solo se esiste già un "?" nell'URL
            url += url.includes("?") ? `&sortBy=${sortBy}` : `?sortBy=${sortBy}`;

            console.log("Fetching URL:", url);
            try {
                const res = await axios.get(url);
                console.log("Prodotti ricevuti:", res.data);
                setProducts(res.data);
            } catch (err) {
                console.error("Errore nel fetch:", err);
            }
        };

        fetchProducts();
    }, [category, finalSearchQuery, sortBy]);

    return (
        <div className='container-main-2'>
            <div className='container-card-newproducts'>
                {products.length > 0 ? (
                    products.map(product => (
                        <div className='card-container-product' key={product.slug}>
                            <ProductCard productProp={product} />
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}
