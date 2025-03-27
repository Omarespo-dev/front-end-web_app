// ReviewCard.jsx

// import del componente render stelle
import RenderStars from '../components/RenderStars';

const ReviewCard = (props) => {

    const { name, vote, text } = props.reviewProp;

    return (

        <div className="card mb-4" style={{ minWidth: '200px', maxWidth: '250px' }}>

            <div className="card-body">

                <p className="card-text">{text || "Text not found"}</p>

                <strong>Vote: <RenderStars average={vote} /> </strong>

                <address><i>By {name} </i></address>
            </div>

        </div>

    )

}





export default ReviewCard