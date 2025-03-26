//FONT AWESOME LINK
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
//FONT AWESOME LINK


// IMPORTO STATO
import React, { useState } from 'react'

export default function Heart() {
    // Imposto lo stato per il cuore partendo da false
    const [isFilled, SetIsFilled] = useState(false)

    return (
        <FontAwesomeIcon
            onClick={() => SetIsFilled(!isFilled)}
            icon={isFilled ? faHeartSolid : faHeartRegular}
            style={{ color: "#004080", cursor: "pointer" }} />
    )
}
