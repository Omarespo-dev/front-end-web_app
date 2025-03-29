import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");  // Stato per il criterio di ordinamento
    const navigate = useNavigate();

    // quando l'utente invia la ricerca
    const handleSearch = (e) => {
        e.preventDefault();
        const queryParams = new URLSearchParams();

        if (searchTerm.trim()) {
            queryParams.set("query", searchTerm);
        }

        queryParams.set("sortBy", sortBy); // Aggiunge l'ordinamento alla query

        navigate(`/products?${queryParams.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className="searchbar-form">
            <input
                type="text"
                placeholder="Cerca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="recent">Più Recenti</option>
                <option value="price_asc">Prezzo: dal più basso</option>
                <option value="price_desc">Prezzo: dal più alto</option>
                <option value="name">Nome (A-Z)</option>
            </select>

            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} /></button>
        </form>
    );
}
