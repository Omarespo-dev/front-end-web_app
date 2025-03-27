import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductsList from "../components/ProductsList";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Quando l'utente invia la ricerca
    const handleSearch = (e) => {
        e.preventDefault(); // Evita il refresh della pagina

        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="searchbar">
            {/* Barra di ricerca */}
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Cerca"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Cerca</button>
            </form>

            {/* Lista dei prodotti trovati */}
            <ProductsList />
        </div>
    );
}
