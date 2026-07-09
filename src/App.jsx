import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Profile from "./pages/Profile"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
