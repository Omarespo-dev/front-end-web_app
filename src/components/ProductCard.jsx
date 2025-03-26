// ProductCard.jsx

import { Link } from "react-router-dom"

const ProductCard = (props) => {

    const { id, name, brand, image_card } = props.productProp;

    return (

        <div >
            <div >
                <img src={image_card} alt={name} />

                <div className="card-body text-center">

                    <h5 className="card-title">{name}</h5>

                    <h5 className="card-title">{brand}</h5>

                    <div>
                        <Link to={`/product/${id}`}>
                            See More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default ProductCard