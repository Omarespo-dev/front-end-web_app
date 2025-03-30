//FONT AWESOME LINK
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
//FONT AWESOME LINK

// IMPORTO STATO E CONTEXT
import React, { useState, useContext } from 'react'
import { WishlistContext } from "../context/WishlistContext";



export default function Heart({ productId }) {
    // Usa il contesto per ottenere la wishlist e la funzione toggle
    const { wishlist, toggleWishlist } = useContext(WishlistContext);
    // Controlla se il prodotto è nella wishlist
    const isInWishlist = wishlist.some(item => item.id === productId);

    return (
        <FontAwesomeIcon
            onClick={() => toggleWishlist(productId)} // Usa la funzione toggle per aggiungere/rimuovere dalla wishlist
            icon={isInWishlist ? faHeartSolid : faHeartRegular}
            style={{ color: isInWishlist ? "#ff0000" : "#004080", cursor: "pointer" }} // Cambia il colore a seconda dello stato 
        />
    )
}
