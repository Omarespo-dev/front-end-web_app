// importiamo parte Link
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="div-notFound">
            <h2>Page Not Found</h2>
            <p>Sorry, but the page you are looking for does not exist</p>
            <Link  to="/"> <button className="button">Back to home </button></Link>
        </div>
    )
}

export default NotFoundPage