import Login from "./pages/login"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/register"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"

function App() {


  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/" element={ <Layout /> }>
      <Route path="home-page" element={ <Home /> }/>
      <Route path="profile" element={ <Profile /> }/>
      </Route>
    </Routes>
    
  )
}

export default App
