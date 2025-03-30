// ReviewCard.jsx

// import del componente render stelle
import RenderStars from '../components/RenderStars';

const ReviewCard = (props) => {

    const { name, vote, text,data } = props.reviewProp;

    return (

        <div className="card-reviews" >

            <div className="card-body">
                <address><i>{name} </i><strong>Vote: <RenderStars average={vote} /> </strong></address>
                <span>{data.slice(0,10)}</span>
                <p className="card-text">{text || "Text not found"}</p>


            </div>

        </div>

    )

}





export default ReviewCard