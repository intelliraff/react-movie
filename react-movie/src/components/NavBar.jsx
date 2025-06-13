import { Link } from "react-router-dom"

import '/Users/pushpanjaniambadipudi/react-movie/react-movie/src/css/Navbar.css'

function NavBar(){
    return (
        <nav className="navbar">

            <div className="navbar-brand">
                <Link to="/" >Movie website by Akhila sai</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}


export default NavBar;