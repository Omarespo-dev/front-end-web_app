import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductsList from "../components/ProductsList";

export default function SearchPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const query = searchParams.get("query") || "";
    const sortBy = searchParams.get("sortBy") || "recent"; // Default: recenti

    return (
        <div className="search-page">
            <ProductsList query={query} sortBy={sortBy} />
        </div>
    );
}
