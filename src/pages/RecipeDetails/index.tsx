import { useParams } from "react-router-dom";
import RecipesContext from "../../context/RecipesContext";
import { useContext } from "react";
import { managerRecipes } from "../../utils/Utils";

function RecipeDetails() {
  const params = useParams();
  const { recipes } = useContext(RecipesContext);
  
  const currentRecipe = recipes.find((recipe) => managerRecipes(recipe).id === params.recipeId);
  console.log(currentRecipe);

  if (!currentRecipe) {
    return <h1>Receita não  encontrada</h1>
  }

  const recipe = managerRecipes(currentRecipe)
  console.log(recipe);
  
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
    </div>
  )
}

export default RecipeDetails;