import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { allFetch, managerListRecipes } from "../../utils/Utils"
import { CategoryObject } from "../../utils/types"
import Categories from "../../components/Categories/Categories"
import RecipesContext from "../../context/RecipesContext"
import RecipeCard from "../../components/RecipeCard"


function Home() {
  const { recipes, setAllRecipes, setRecipes } = useContext(RecipesContext)
  const [categories, setCategories] = useState<CategoryObject[]>([])
  const { pathname } = useLocation()
  const [togle, setTogle] = useState(false)
  
  
  const recipe = pathname.split("/")[1] === "meals" ? "meal" : "drink"
  const url = `https://www.the${recipe}db.com/api/json/v1/1/search.php?s=`


  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchRecipes() {
      setTogle(true)
      const response = await allFetch(url)
      const data = response.meals || response.drinks
      const recipesData = managerListRecipes(data).slice(0, 12)
      
      setAllRecipes(recipesData)
      setRecipes(recipesData)
      setTogle(false)        
    }

    async function fetchCategories() {
      const response = await allFetch(url.replace("search.php?s=", "list.php?c=list"))
      const data = response.meals || response.drinks
      setCategories(data.slice(0, 5))
    }

    fetchCategories()
    fetchRecipes()
  }, [recipe, url])

  return togle ? <h1>Aguarde alguns instantes, carregando receitas</h1> : (
    <div className="flex flex-col text-center">
      <Categories categories={ categories }/>
      <ul className="mt-2 flex flex-wrap justify-evenly">
        {recipes.map((recipe, index) => (
          <li key={ index } className="flex flex-col justify-center p-4 m-3 size-80">
            <RecipeCard recipe={ recipe } />
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Home