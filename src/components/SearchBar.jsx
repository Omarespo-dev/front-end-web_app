import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");  // Stato per il criterio di ordinamento

    // Imposto stato per il burger menu
    const [isOpen, setIsOpen] = useState(false)


    function toggleMenu() {
        setIsOpen(!isOpen)
    }

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
            {isOpen && (
                <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            )}
            

            <button onClick={toggleMenu}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} /></button>
        </form>
    );
}
