import { Routes, Route } from "react-router-dom"
import PlayGame from "./pages/PlayGame"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayGame/>}/>
    </Routes>
  )
}

export default App
