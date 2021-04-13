import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>But not sorry :P</p>
            <p>That page was not found!</p>
            <Link to="/">&raquo; Back to the homepage</Link>
        </div>
    );
}
 
export default NotFound;