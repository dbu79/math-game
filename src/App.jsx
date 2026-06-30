import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import NavBar from "./components/NavBar"
import StartScreen from "./components/StartScreen"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  )
}

export default App
