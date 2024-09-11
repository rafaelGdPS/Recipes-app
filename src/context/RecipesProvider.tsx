import React, { useState } from "react"
import { drinkRecipe, mealRecipe } from "../utils/types";
import RecipesContext from "./RecipesContext";

type RecipesProverProps = {
  children: React.ReactNode;
}

function RecipesProvider({ children }: RecipesProverProps) {
  const [recipes, setRecipes] = useState<mealRecipe[] | drinkRecipe[]>([]);

  const context = {
    recipes,
    setRecipes,
  }

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  )
}

export default RecipesProvider