import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/game/NavBar"
import AuthPage from "./pages/AuthPage"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<AuthPage />}/>
      </Routes>
    </>
  )
}

export default App
