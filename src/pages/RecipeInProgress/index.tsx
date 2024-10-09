import { useContext, useState } from "react";
import RecipesContext from "../../context/RecipesContext";
import whiteHeart from  "../../images/whiteHeartIcon.svg"
import blackHeart from  "../../images/blackHeartIcon.svg"
import shareIcon from  "../../images/shareIcon.svg"
import { removeStorage, setStorage } from "../../utils/LocalStorage";

type Checked = {
  [key: string]: boolean
}

function RecipeInProgress() {
  const [favoriteHeart, setFavoriteHeart] = useState(whiteHeart);
  const [isChecked, setIsChecked] = useState<Checked>(Object);
  const [isFinished, setIsFinished] = useState(false);
  const {recipeDetails} = useContext(RecipesContext);


  const handleFavorite = () => {
    favoriteHeart === whiteHeart ? setFavoriteHeart(blackHeart) : setFavoriteHeart(whiteHeart);
  }
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    setIsChecked({
      ...isChecked,
      [name]: checked
    });
  }
  const handleFinish = () => {
    if (isFinished === false) {
      setStorage('doneRecipes', recipeDetails)
      setIsFinished(true)
    } else {
      removeStorage('doneRecipes', recipeDetails)
      setIsFinished(false)
    }
  }
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copiado!')
  }
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
            <input 
            type="checkbox" 
            name={ `${ingredient} - ${recipeDetails?.measures[index]}` } 
            id={ ingredient }
            checked={isChecked[ingredient]}
            onChange={handleCheck} 
            />
          </label>
        </div>
      ))}
      <button  onClick={ handleFinish }>Finalizar receita</button>
      <button onClick={ handleFavorite }><img src={ favoriteHeart } alt="Botão de favorito" /></button>
      <button  onClick={ handleShare }><img src={shareIcon} alt="" /></button>
    </div>
  );
}

export default RecipeInProgress;