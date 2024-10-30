import { useEffect, useState } from "react";
import { Recipe } from "../../utils/types";
import { getStorage } from "../../utils/LocalStorage";
import RecipeCard from "../../components/RecipeCard";
import Navigate from "../../components/Navigate";
import shareIcon from  "../../images/shareIcon.svg"
import { unfavorite } from "../../utils/Utils";

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<Recipe[]>([]);


  const sharing = (recipeId: string) => {
    navigator.clipboard.writeText(window.location.host + '/meals/' + recipeId)
    alert('Link copiado!')
  }
  useEffect(() => {
    const recipes = getStorage('doneRecipes')
    setDoneRecipes(recipes as Recipe[])
    
  }, [])
  return (
    <div>
      <h1>Receitas feitas</h1>
      <Navigate />
      <div className="flex flex-wrap">
      {doneRecipes.map((recipe) => (
        <div  key={recipe.id}>
          <RecipeCard recipe={recipe} />
          <button onClick={ () => unfavorite(recipe,'doneRecipes') } >Desfazer</button>
          <button  onClick={ () => sharing(recipe.id) }><img src={shareIcon} alt="" /></button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DoneRecipes