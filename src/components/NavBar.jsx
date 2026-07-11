import { Link, useNavigate } from "react-router-dom"
import { BsPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { useAuth } from "./auth/AuthContext"


function NavBar() {
    const { user } = useAuth()

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/leaderboard" className="nav-link">
                <FaCrown size={22}/>
            </Link>
            <Link to="/settings" className="nav-link"> 
                <IoMdSettings size={22}/>
            </Link>
            <Link to="/profile" className="nav-link"> 
                <BsPersonFill size={22}/>
                { user ? user.user_metadata.username : ""}
            </Link>
        </nav>
    )
}


export default NavBar