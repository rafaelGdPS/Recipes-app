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
    <div className=" flex flex-col text-center ">
      <h1>Recipe Details</h1>
      <section className=" flex justify-evenly " >
        <div className="bg-white rounded-xl p-4 w-3/6 ">
          <h2>{ recipe.name }</h2>
          <p>{ recipe.category }</p>
          <img className=" rounded-2xl " src={ recipe.img } alt={ recipe.name } />
        </div>
        <div className="bg-yellow-50 opacity-80 px-20 flex flex-col rounded-xl justify-evenly w-5/12 border-2 border-solid border-black ">
          <h2 className="text-4xl">Ingredients</h2>
          <ul >
        { recipe.ingredients.map((ingredient, index) => (
           <li className=" border-b-black border-b-2 text-xl" key={ index }>{ ingredient } - { recipe.measures[index] }</li>
        )) }
          </ul>
        <section className=" bg-yellow-200 text-center text-xl  " >
          <h2>Instruções</h2>
          <p className="underline" >{ recipe.instructions }</p>
        </section>
        </div>
      </section>

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