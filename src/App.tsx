import Login from "./pages/login"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/register"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import RecipeDetails from "./pages/RecipeDetails"
import RecipeInProgress from "./pages/RecipeInProgress"
import DoneRecipes from "./pages/DoneRecipes"

function App() {


  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/" element={ <Layout /> }>
       <Route path="meals" element={ <Home /> }/>
       <Route path="drinks" element={ <Home /> }/>
       <Route path="profile" element={ <Profile /> }/>
      </Route>
      <Route path="/meals/:recipeId" element={ <RecipeDetails /> }/>
      <Route path="/drinks/:recipeId" element={ <RecipeDetails /> }/>
      <Route path="/meals/:recipeId/in-progress" element={ <RecipeInProgress /> }/>
      <Route path="/drinks/:recipeId/in-progress" element={ <RecipeInProgress /> }/>
      <Route path="/done-recipes" element={ <DoneRecipes />} /> 
    </Routes>
    
  )
}

export default App
