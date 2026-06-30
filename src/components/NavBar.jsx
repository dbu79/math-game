import { BrowserRouter } from "react-router-dom"

function NavBar() { 
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/practice">Practice</a>
            <a href="/profile">Profile</a>
        </nav>
    )
}

export default NavBar