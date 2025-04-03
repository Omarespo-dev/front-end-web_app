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

    // stati per i filtri
    const [minPrice, setMinPrice] = useState(Number(params.get("minPrice")) || 0);
    const [maxPrice, setMaxPrice] = useState(Number(params.get("maxPrice")) || 2500);
    const [brand, setBrand] = useState(params.get("brand") || "");
    const [name, setName] = useState(params.get("name") || "");

    // effetto per aggiornare i parametri dell'URL quando i filtri cambiano
    useEffect(() => {
        const newParams = new URLSearchParams();

        if (query) newParams.set("query", query);
        if (category) newParams.set("category", category);
        if (brand) newParams.set("brand", brand);
        if (name) newParams.set("name", name);
        if (minPrice > 0) newParams.set("minPrice", minPrice);
        if (maxPrice < 2500) newParams.set("maxPrice", maxPrice);
        if (sortProduct !== "recent") newParams.set("sortBy", sortProduct);

        // aggiorno l'URL senza ricaricare la pagina
        navigate({ search: newParams.toString() }, { replace: true });

    }, [category, query, brand, name, minPrice, maxPrice, sortProduct, navigate]);

    // effetto per recuperare i prodotti dal backend
    useEffect(() => {
        const fetchProducts = async () => {
            let url = category === "sales"
                ? "http://localhost:3000/api/ecommerce/products/sales"
                : "http://localhost:3000/api/ecommerce/products";

            let queryParams = [];

            if (query) queryParams.push(`query=${query}`);
            if (category && category !== "sales" && !location.pathname.includes("/products/sales")) {
                queryParams.push(`category=${category}`);
            }
            if (brand) queryParams.push(`brand=${brand}`);
            if (name) queryParams.push(`name=${name}`);
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


        fetchProducts();
    }, [category, query, brand, name, minPrice, maxPrice, sortProduct]);

    return (
        <>
            {/* Sezione Filtri */}
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

                        {/* Slider per il prezzo minimo */}
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </div>



            </div>

            {/* Lista dei prodotti */}
            < div className='container-main-2' >
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
            </div >

        </>
    );
}
