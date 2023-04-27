import { Link } from "react-router-dom"

// component that displays a 404 error page whenever a non-existent page is navigated to
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <p>We cannot find that page!</p>
            <Link to='/'>Take me back to Home</Link>
        </div>
     );
}
 
export default NotFound;