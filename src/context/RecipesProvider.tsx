import React, { useState } from "react"
import { drinkRecipe, mealRecipe } from "../utils/types";
import RecipesContext from "./RecipesContext";

type RecipesProverProps = {
  children: React.ReactNode;
}

function RecipesProvider({ children }: RecipesProverProps) {
  const [allRecipes, setAllRecipes] = useState<mealRecipe[] | drinkRecipe[]>([]);
  const [recipes, setRecipes] = useState<mealRecipe[] | drinkRecipe[]>(allRecipes);
  const context = {
    recipes,
    setRecipes,
    allRecipes,
    setAllRecipes,
  }

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  )
}

export default RecipesProvider