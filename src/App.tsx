import Login from "./pages/login/Login"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/register"
import Home from "./pages/Home"

function App() {


  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/home-page" element={ <Home /> }/>
    </Routes>
    
  )
}

export default App
