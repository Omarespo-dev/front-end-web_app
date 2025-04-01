import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsList({ category, searchQuery, query, products: externalProducts }) {

    const location = useLocation();


    // uso "query" per la ricerca globale e "searchQuery" per filtrare i prodotti
    const finalSearchQuery = query || searchQuery || "";

    const [products, setProducts] = useState(externalProducts || []);
    const [sortProduct, setSortProduct] = useState("recent");

    // stati per i filtri
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2500);
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");

    // stato per gestire il timeout del debounce
    const [debouncedFilters, setDebouncedFilters] = useState({
        minPrice,
        maxPrice,
        brand,
        name
    });

    // effetto per aggiornare i filtri dopo un ritardo (debounce)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedFilters({ minPrice, maxPrice, brand, name });
        }, 500);

        // pulisco il timeout se il valore cambia prima della scadenza
        return () => clearTimeout(timeoutId);
    }, [minPrice, maxPrice, brand, name]);

    useEffect(() => {
        const fetchProducts = async () => {
            let url = "http://localhost:3000/api/ecommerce/products";
            let queryParams = [];

            // Aggiungi sempre la query di ricerca come filtro
            if (finalSearchQuery) queryParams.push(`query=${finalSearchQuery}`);
            if (category) queryParams.push(`category=${category}`);
            if (brand) queryParams.push(`brand=${brand}`);
            if (name) queryParams.push(`name=${name}`);
            if (minPrice > 0) queryParams.push(`minPrice=${minPrice}`);
            if (maxPrice < 2500) queryParams.push(`maxPrice=${maxPrice}`);
            if (sortProduct !== "recent") queryParams.push(`sortBy=${sortProduct}`);

            // Aggiungi i parametri all'URL
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
    }, [category, finalSearchQuery, debouncedFilters, sortProduct]);


    // ordinamento in base a sortBy
    const sortedProducts = [...products];

    if (sortProduct === "price_asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortProduct === "price_desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortProduct === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <>
            {/* Sezione Filtri */}
            <div className="container-filters">
                <div className="filters">
                    <div>
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
                            <option value="recent">Più Recenti</option>
                            <option value="price_asc">Prezzo: dal più basso</option>
                            <option value="price_desc">Prezzo: dal più alto</option>
                            <option value="name">Nome (A-Z)</option>
                        </select>
                    </div>

                    <label>Price: {minPrice}€ - {maxPrice}€</label>
                    <div className="price-filter">
                        

                        {/* Slider per il prezzo minimo */}
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />

                        {/* Slider per il prezzo massimo */}
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />

                        {/* Input numerici */}
                        <div className="price-inputs">

                            <input
                                type="number"
                                min="0"
                                max="2500"
                                step="50"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value = 0 ? " " : Number(e.target.value)))}
                                onClick={() => setMinPrice("")}

                            />
                            <input
                                type="number"
                                min="0"
                                max="2500"
                                step="50"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value = 0 ? "" : Number(e.target.value)))}
                                onClick={() => setMaxPrice("")}
                            />
                        </div>
                    </div>
                    {/* Ordinamento prodotti in pagina */}

                </div>

            </div>




            <div className='container-main-2'>
                {/* Lista dei prodotti */}
                <div className='container-card-newproducts'>
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map(product => (
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
