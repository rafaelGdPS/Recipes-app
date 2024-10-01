import { useContext } from "react";
import RecipesContext from "../../context/RecipesContext";
import whiteHeart from  "../../images/whiteHeartIcon.svg"
import blackHeart from  "../../images/blackHeartIcon.svg"

function RecipeInProgress() {
  const {recipeDetails} = useContext(RecipesContext);
  return (
    <div>
      <h1>Receita de { recipeDetails?.name }</h1>
      <h3>{recipeDetails?.category}</h3>
      <img src={ recipeDetails?.img } alt={ recipeDetails?.name } />
      <p>{ recipeDetails?.instructions }</p>
      {recipeDetails?.ingredients.map((ingredient, index) => (
        <div key={ ingredient }>
          <label htmlFor={ ingredient }>
            { ingredient } - { recipeDetails?.measures[index] }
            <input type="checkbox" name={ ingredient } id={ ingredient } />
          </label>
        </div>
      ))}
      <button>Receita Finalizada</button>
      <button><img src={ whiteHeart } alt="" /></button>
    </div>
  );
}

export default RecipeInProgress;