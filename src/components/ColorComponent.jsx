
// FUNZIONE PER I COLORI
function getColor(colorName) {
    // Definizione di una mappa che associa il nome del colore al suo codice esadecimale
    const colorMap = {
        "Black": "#000000",        
        "Red": "#FF0000",         
        "Blue": "#0000FF",          
        "Silver": "#C0C0C0",        
        "Grey": "#808080",         
        "Gold": "#FFD700",         
        "Green": "#008000",        
        "Orange": "#FFA500",      
        "Phantom Black": "#121212", 
        "Deep Purple": "#5D3FD3",   
        "Titan Black": "#292929",  
        "Obsidian": "#3D3D3D",     
        "Paper White": "#F5F5F5",   
        "Space Gray": "#A9A9A9",    
        "Platinum": "#E5E4E2",      
        "Midnight Gray": "#4A4A4A", 
        "Glacier Blue": "#71A6D2",  
        "Royal Blue": "#4169E1",    
        "Mystic Silver": "#D4D4D4", 
        "Midnight": "#191970",      
        "Graphite": "#4B4B4B",      
        "Smoke": "#8A8A8A",         
        "Infinite Black": "#121212" 
    };

    // Restituisce il codice colore corrispondente al nome fornito
    // Se il colore non è presente nella mappa, restituisce un colore di default (grigio chiaro)
    return colorMap[colorName] || "#CCCCCC";
}

// Componente che visualizza il colore
const ColorComponent = ({ productColor}) => {
    
    const color = getColor(productColor);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px"}}>
            <span
                style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    border: "none"
                }}
            ></span>
            <span>{productColor}</span>
        </div>
    );
};

export default ColorComponent;