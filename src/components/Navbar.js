import { Link } from 'react-router-dom';

// navbar component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* heading displaying this site's name */}
            <h1>React Blog App</h1>
            <div className="links">
                {/* link to Home page */}
                <Link to="/">Home</Link>
                {/* link to Create Blog page */}
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;