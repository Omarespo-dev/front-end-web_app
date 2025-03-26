
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

// Importo il componente che ha la lista dei prodotti scontati
import SalesProducts from "./SalesProducts";

export default function SalesHomepage() {
    return (
        <>
            <div className='container-main-2'>
                <div className='container-card-newproducts'>
                    <div className='new-product'>
                        <h2>Sales</h2>
                        <a href="#">View all <FontAwesomeIcon icon={faGreaterThan} /></a>
                    </div>
                    
                    <SalesProducts />
                    
                </div>
            </div>
        </>
    )
}
