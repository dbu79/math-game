import { Link, useNavigate } from "react-router-dom"
import { BsPersonFill } from "react-icons/bs";
import { useAuth } from "./auth/AuthContext"
import ThemeToggle from "./ThemeToggle"

function NavBar() {
    const { user } = useAuth()

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <ThemeToggle/>
            <Link to="/profile" className="nav-link"> 
                <BsPersonFill size={22}/>
                { user ? user.user_metadata.username : ""}
            </Link>
        </nav>
    )
}


export default NavBar