import { useParams } from "react-router-dom";
import RecipesContext from "../../context/RecipesContext";
import { useContext } from "react";
import { managerRecipes } from "../../utils/Utils";

function RecipeDetails() {
  const params = useParams();
  const { recipes } = useContext(RecipesContext);
  
  const currentRecipe = recipes.find((recipe) => managerRecipes(recipe).id === params.recipeId);
  console.log(currentRecipe);
  
  return (
    <div>
      <h1>Recipe Details</h1>
    </div>
  )
}

export default RecipeDetails;