import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import NavBar from "./components/NavBar"

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
