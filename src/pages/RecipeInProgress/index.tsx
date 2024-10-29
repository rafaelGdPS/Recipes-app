import React, { useContext, useEffect, useState } from "react";
import RecipesContext from "../../context/RecipesContext";
import whiteHeart from  "../../images/whiteHeartIcon.svg"
import blackHeart from  "../../images/blackHeartIcon.svg"
import shareIcon from  "../../images/shareIcon.svg"
import {getStorage, removeStorage, setStorage } from "../../utils/LocalStorage";
import { Recipe } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { sharing } from "../../utils/Utils";

type Checked = {
  [key: string]: boolean
}

export type RecipesInProgress = {
  id: string,
  ingredients: Checked
}


function RecipeInProgress() {
  const [favoriteHeart, setFavoriteHeart] = useState(whiteHeart);
  const [recipeInProgress, setRecipeInProgress] = useState<Checked>({});
  const [isChecked, setIsChecked] = useState<Checked>(recipeInProgress);
  const [isFinished, setIsFinished] = useState(false);
  const {recipeDetails} = useContext(RecipesContext);
  const navigate = useNavigate()

  const handleFavorite = () => {
    favoriteHeart === whiteHeart ? setFavoriteHeart(blackHeart) : setFavoriteHeart(whiteHeart);
    if (favoriteHeart === whiteHeart) {
      setStorage('favoriteRecipes', recipeDetails)
    } else {
      removeStorage('favoriteRecipes', recipeDetails)
    }
  }

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name} = e.target;

    const newChecked = {...isChecked, [name]: checked}
    
    
    const ingredientsObject = { 
      id: recipeDetails.name, 
      ingredients: newChecked, 
    }
    
    setIsChecked(newChecked);
    setStorage('inProgressRecipes', ingredientsObject)
  }

   const handleFinish = () => {
    if (isFinished === false) {
      setStorage('doneRecipes', recipeDetails)
      setIsFinished(true)
      navigate("/done-recipes")
    } else {
      removeStorage('doneRecipes', recipeDetails)
      setIsFinished(false)
    }
  }


  const handleDisable =  () => {
    const allIngredients = recipeDetails.ingredients.length;
    
    const checkedIngredients = Object.values(isChecked).filter((item) => item === true).length;

    return allIngredients !== checkedIngredients 
  }
  

  useEffect(() => {
    const getlocalStorage = () => {     
      const ingredientsDone = getStorage('inProgressRecipes')
      if (ingredientsDone.length === 0) return;
      const ingredients = ingredientsDone.find((item: RecipesInProgress | Recipe) => item.id === recipeDetails.name)
      if (ingredients) {
        setRecipeInProgress(ingredients.ingredients as Checked)
        setIsChecked(ingredients.ingredients as Checked)
      }
   }
  getlocalStorage()
  }, [])

  return (
    <div>
      <h1>Receita de { recipeDetails?.name }</h1>
      <h3>{recipeDetails?.category}</h3>
      <img src={ recipeDetails?.img } alt={ recipeDetails?.name } />
      <p>{ recipeDetails?.instructions }</p>
      {recipeDetails?.ingredients.map((ingredient, index) => (
        <div key={ `${ingredient} - ${recipeDetails?.measures[index]}`  }>
          <label htmlFor={ ingredient }>
            { ingredient } - { recipeDetails?.measures[index] }
            <input 
            type="checkbox" 
            name={ `${ingredient} - ${recipeDetails?.measures[index]}` } 
            id={ ingredient }

            checked={isChecked[`${ingredient} - ${recipeDetails?.measures[index]}`]}
            onChange={handleCheck} 
            />
          </label>
        </div>
      ))}
      <button  
      onClick={ handleFinish }
      disabled={ handleDisable() }
      >Finalizar receita</button>
      <button onClick={ handleFavorite }><img src={ favoriteHeart } alt="Botão de favorito" /></button>
      <button  onClick={ () => sharing(recipeDetails.id) }><img src={shareIcon} alt="Icone para compartilhar receita" /></button>
    </div>
  );
}

export default RecipeInProgress;