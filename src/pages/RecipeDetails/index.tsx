import { useNavigate, useParams } from "react-router-dom";
import RecipesContext from "../../context/RecipesContext";
import { useContext, useEffect, useState} from "react";
import { allFetch, managerLocation, managerRecipes } from "../../utils/Utils";
import { getStorage } from "../../utils/LocalStorage";

// import Recomendations from "../../components/Recomendations";

function RecipeDetails() {
  const [inProgress, setInProgress] = useState<string>("");
  const params = useParams();
  const navigate = useNavigate()
  const { setRecipeDetails, recipeDetails } = useContext(RecipesContext);
  
  const location = managerLocation()
  console.log(recipeDetails);
  
  const recipe = recipeDetails
   
  const handleclick = () => {
    setRecipeDetails(recipe)
    navigate(window.location.pathname + '/in-progress')
  }

  const storageData = getStorage('doneRecipes')
  const verifyDoneRecipes = storageData.some((item) => item.id === recipe.id)
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const getLocalStorage = () => {
      const dataStorage = getStorage('inProgressRecipes')
      if (dataStorage.length === 0) return;

      const data = dataStorage.find((item) => item.id === recipe.name)

      if (data) {
        const verifyData = Object.values(data.ingredients).some((item) => item === true)
        
        if (verifyData) setInProgress(data.id)
      }
    }
    const getRecipe = async () => {
      const response = await allFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipeId}`)
      const data = response.meals || response.drinks
      setRecipeDetails(managerRecipes(data[0]))
    }
    getRecipe()
    getLocalStorage()
  }, [location])

  
  return (
    <div>
      <h1>Recipe Details</h1>
      <p>{ recipe.category }</p>
      <h2>{ recipe.name }</h2>
      <img src={ recipe.img } alt={ recipe.name } />
      <ul>
        { recipe.ingredients.map((ingredient, index) => (
          <li key={ index }>{ ingredient } - { recipe.measures[index] }</li>
        )) }
      </ul>
      <p>{ recipe.instructions }</p>

      <iframe 
      src={ recipe.youtube && recipe.youtube.replace('watch?v=', 'embed/') }
      title={ recipe.name }
      height="300px"
      width="100%"
      />
      {/* <Recomendations /> */}
      
      { verifyDoneRecipes === false && <button onClick={handleclick} >{inProgress !== "" ? "Continuar receita" : "Começar Receita"}</button>}
    </div>
  )
}

export default RecipeDetails;