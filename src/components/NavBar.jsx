import { Link, useNavigate } from "react-router-dom"
import { User } from "lucide-react"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/profile">Profile <User/></Link>
        </nav>
    )
}


export default NavBar