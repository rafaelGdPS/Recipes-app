import { useEffect, useState } from "react";
import { Recipe } from "../../utils/types";
import { getStorage } from "../../utils/LocalStorage";
import RecipeCard from "../../components/RecipeCard";
import Navigate from "../../components/Navigate";
import shareIcon from  "../../images/shareIcon.svg"
import { sharing, unfavorite } from "../../utils/Utils";
import BtnFilters from "../../components/Btnfilters";

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(favoriteRecipes);

  const handleFilters = ( type: string ) => {
  
    const recipes = favoriteRecipes.filter((recipe) => recipe.type === type.toLowerCase())
    setFilteredRecipes(recipes)
  
}

  useEffect(() => {
    const recipes = getStorage('favoriteRecipes')
    setFavoriteRecipes(recipes as Recipe[])
    setFilteredRecipes(recipes as Recipe[])
  }, [])
  return (
    <div>
    <h1>Tela de Favoritos</h1>
    < Navigate />
    < BtnFilters
    filters={ handleFilters }
    withouthFilters={ () => setFilteredRecipes(favoriteRecipes) }
     />
    <div>
      {filteredRecipes.map((recipe) => (
        <div>
          <RecipeCard recipe={ recipe } />
          <button onClick={ () => sharing(recipe.id) }> <img src={ shareIcon } alt="Botão de compartilhar" /></button>
          <button onClick={() => unfavorite(recipe, 'favoriteRecipes') } > Desfavoritar </button>
        </div>
      ))}
    </div>
    </div>
  )
}
export default FavoriteRecipes;