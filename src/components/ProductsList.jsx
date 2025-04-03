// ProductsList.jsx

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsList({ category, searchQuery, query, products: externalProducts }) {

    const location = useLocation();
    const navigate = useNavigate();

    // recupero i parametri dell'URL
    const params = new URLSearchParams(location.search);

    // stati per i prodotti
    const [products, setProducts] = useState(externalProducts || []);
    const [sortProduct, setSortProduct] = useState(params.get("sortBy") || "recent");

    // stati per i filtri con debounce
    const [brand, setBrand] = useState(params.get("brand") || "");
    const [name, setName] = useState(params.get("name") || "");
    const [minPrice, setMinPrice] = useState(Number(params.get("minPrice")) || 0);
    const [maxPrice, setMaxPrice] = useState(Number(params.get("maxPrice")) || 2500);

    // stati debounce
    const [debouncedBrand, setDebouncedBrand] = useState(brand);
    const [debouncedName, setDebouncedName] = useState(name);

    // debounce per gli input brand e name
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedBrand(brand);
            setDebouncedName(name);
        }, 500);
        return () => clearTimeout(handler);
    }, [brand, name]);

    // effetto per aggiornare i parametri dell'URL quando i filtri cambiano
    useEffect(() => {
        const newParams = new URLSearchParams();

        if (query) newParams.set("query", query);
        if (category) newParams.set("category", category);
        if (debouncedBrand) newParams.set("brand", debouncedBrand);
        if (debouncedName) newParams.set("name", debouncedName);
        if (minPrice > 0) newParams.set("minPrice", minPrice);
        if (maxPrice < 2500) newParams.set("maxPrice", maxPrice);
        if (sortProduct !== "recent") newParams.set("sortBy", sortProduct);

        navigate({ search: newParams.toString() }, { replace: true });
    }, [category, query, debouncedBrand, debouncedName, minPrice, maxPrice, sortProduct, navigate]);

    // Effetto con debounce per recuperare i prodotti dal backend
    useEffect(() => {
        const fetchProducts = async () => {
            let url = category === "sales"
                ? "http://localhost:3000/api/ecommerce/products/sales"
                : "http://localhost:3000/api/ecommerce/products";

            let queryParams = [];

            if (query) queryParams.push(`query=${query}`);
            if (category && category !== "sales") queryParams.push(`category=${category}`);
            if (debouncedBrand) queryParams.push(`brand=${debouncedBrand}`);
            if (debouncedName) queryParams.push(`name=${debouncedName}`);
            if (minPrice > 0) queryParams.push(`minPrice=${minPrice}`);
            if (maxPrice < 2500) queryParams.push(`maxPrice=${maxPrice}`);
            if (sortProduct !== "recent") queryParams.push(`sortBy=${sortProduct}`);

            if (queryParams.length > 0) {
                url += "?" + queryParams.join("&");
            }

            console.log("Fetching URL:", url);
            try {
                const res = await axios.get(url);
                console.log("Prodotti ricevuti:", res.data);
                setProducts(res.data);
            } catch (err) {
                console.error("Errore nel fetch:", err);
            }
        };

        const delayDebounce = setTimeout(fetchProducts, 500);
        return () => clearTimeout(delayDebounce);
    }, [category, query, debouncedBrand, debouncedName, minPrice, maxPrice, sortProduct]);

    return (
        <>
            <div className="container-filters">
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="set-input-up"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="set-input-up"
                    />
                    <select value={sortProduct} onChange={(e) => setSortProduct(e.target.value)}>
                        <option value="recent">More recents</option>
                        <option value="price_asc">Price: from lower</option>
                        <option value="price_desc">Price: from higher</option>
                        <option value="brand">Brand (A-Z)</option>
                    </select>
                    <div className="price-filter">
                        <label>Price: {minPrice}€ - {maxPrice}€</label>
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={minPrice}
                            onChange={(e) => {
                                const newMin = Number(e.target.value);
                                setMinPrice(Math.min(newMin, maxPrice));
                            }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => {
                                const newMax = Number(e.target.value);
                                setMaxPrice(Math.max(newMax, minPrice));
                            }}
                        />
                    </div>
                </div>
            </div>

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
        </>
    );
}
