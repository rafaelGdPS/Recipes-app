import { useEffect, useState } from "react";
import { Recipe } from "../../utils/types";
import { getStorage, removeStorage } from "../../utils/LocalStorage";
import RecipeCard from "../../components/RecipeCard";
import Navigate from "../../components/Navigate";

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<Recipe[]>([]);

  const handleClick = (recipe: Recipe) => {
    removeStorage('doneRecipes',recipe)
    window.location.reload()
  }

  useEffect(() => {
    const recipes = getStorage('doneRecipes')
    setDoneRecipes(recipes as Recipe[])
    
  }, [])
  return (
    <div>
      <h1>Receitas feitas</h1>
      <Navigate />
      {doneRecipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
          <button onClick={ () => handleClick(recipe) } >Desfazer</button>
        </div>
      ))}
    </div>
  )
}

export default DoneRecipes