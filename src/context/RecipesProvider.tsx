import React, { useState } from "react"
import { drinkRecipe, mealRecipe, Recipe, RECIPE_INITIAL } from "../utils/types";
import RecipesContext from "./RecipesContext";

type RecipesProverProps = {
  children: React.ReactNode;
}

function RecipesProvider({ children }: RecipesProverProps) {
  const [allRecipes, setAllRecipes] = useState<mealRecipe[] | drinkRecipe[]>([]);
  const [recipes, setRecipes] = useState<mealRecipe[] | drinkRecipe[]>(allRecipes);
  const [recipeDetails, setRecipeDetails] = useState<Recipe>(RECIPE_INITIAL);
  const context = {
    recipes,
    setRecipes,
    allRecipes,
    setAllRecipes,
    recipeDetails,
    setRecipeDetails,
  }

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  )
}

export default RecipesProvider