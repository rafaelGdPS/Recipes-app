import { Recipe } from "../../utils/types"

type RecipeCardProps = {
  recipe: Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {

  return (
    <button className="grid ">
      <h2>{recipe.name}</h2>
      <h4>{recipe.category}</h4>
      <img src={recipe.img} alt={ recipe.name } />
    </button>
  )
}

export default RecipeCard