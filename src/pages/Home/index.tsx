import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { allFetch } from "../../utils/Utils"
import { drinkRecipe, mealRecipe } from "../../utils/types"

const urlMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const urlDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function Home() {
  const [rcipes, setRecipes] = useState<mealRecipe[]|drinkRecipe[]>([])
  const { pathname } = useLocation()
  const url = pathname.split("/")[1] === "meals" ? urlMeal : urlDrink
 
  
  useEffect(() => {
    async function fetchRecipes() {
            const response = await allFetch(url)
            const data = response.meals || response.drinks
            setRecipes(data.slice(0, 12))
            console.log(data.slice(0, 12));
            
    }
    fetchRecipes()
  }, [url])

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {rcipes.map((recipe, index) => (
          <li key={ index }>
            <h2>{'strMeal' in recipe ? recipe.strMeal : recipe.strDrink}</h2>
            <img src={'strMeal' in recipe ? recipe.strMealThumb : recipe.strDrinkThumb} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Home