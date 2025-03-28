import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsList({ category, searchQuery, query, sortBy }) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // uso "query" per la ricerca globale e "searchQuery" per filtrare i prodotti
    const finalSearchQuery = query || searchQuery || "";

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortProduct, setSortProduct] = useState("recent");

    // stati per i filtri
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2500);
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            let url = "http://localhost:3000/api/ecommerce";

            if (finalSearchQuery) {
                url += `/search?query=${finalSearchQuery}`;
            } else if (category) {
                url += `/${category}`;
            }

            url += url.includes("?") ? `&sortBy=${sortBy}` : `?sortBy=${sortBy}`;

            console.log("Fetching URL:", url);
            try {
                const res = await axios.get(url);
                console.log("Prodotti ricevuti:", res.data);
                setProducts(res.data);
                setFilteredProducts(res.data); // Inizializzo i prodotti filtrati
            } catch (err) {
                console.error("Errore nel fetch:", err);
            }
        };

        fetchProducts();
    }, [category, finalSearchQuery, sortBy]);

    // funzione per filtrare e ordinare i prodotti localmente
    useEffect(() => {
        let filtered = [...products];

        // filtraggio dei prodotti in base ai filtri
        filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

        if (brand) {
            filtered = filtered.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
        }
        if (name) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        }

        // ordinamento in base a sortBy
        if (sortProduct === "price_asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortProduct === "price_desc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortProduct === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredProducts(filtered);
    }, [minPrice, maxPrice, brand, name, sortProduct, products]); // eseguo l'aggiornamento quando cambiano i filtri

    return (
        <div className='container-main-2'>
            {/* Sezione Filtri */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            min="0"
                            max="2500"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            {/* Ordinamento prodotti in pagina */}
            <div>
                <select value={sortProduct} onChange={(e) => setSortProduct(e.target.value)}>
                    <option value="recent">Più Recenti</option>
                    <option value="price_asc">Prezzo: dal più basso</option>
                    <option value="price_desc">Prezzo: dal più alto</option>
                    <option value="name">Nome (A-Z)</option>
                </select>
            </div>

            {/* Lista dei prodotti */}
            <div className='container-card-newproducts'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
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
