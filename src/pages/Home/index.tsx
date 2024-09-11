import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { allFetch } from "../../utils/Utils"
import { CategoryObject } from "../../utils/types"
import Categories from "../../components/Categories/Categories"
import RecipesContext from "../../context/RecipesContext"

const meal = "meal"
const drink = "cocktail"

function Home() {
  const { recipes, setRecipes } = useContext(RecipesContext)
  const [categories, setCategories] = useState<CategoryObject[]>([])
  const { pathname } = useLocation()
  const recipe = pathname.split("/")[1] === "meals" ? meal : drink
  const url = `https://www.the${recipe}db.com/api/json/v1/1/search.php?s=`
  

  useEffect(() => {
    async function fetchRecipes() {
      const response = await allFetch(url)
      const data = response.meals || response.drinks
      setRecipes(data.slice(0, 12))
                 
    }

    async function fetchCategories() {
      const response = await allFetch(url.replace("search.php?s=", "list.php?c=list"))
      const data = response.meals || response.drinks
      setCategories(data.slice(0, 5))
    }

    fetchCategories()
    fetchRecipes()
  }, [recipe])

  return (
    <div>
      <h1>Recipes</h1>
      <Categories categories={ categories }/>
      <ul>
        {recipes.map((recipe, index) => (
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