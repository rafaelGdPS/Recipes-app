import { removeStorage } from "./LocalStorage";
import { drinkRecipe, mealRecipe, Recipe } from "./types";

export const allFetch = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert('Dados não encontrados');
  }
};

const filterkeys = (recipe: mealRecipe | drinkRecipe, keyObject: string) => {
  const keys = Object.entries(recipe).filter((r) => {
    const [key, value] = r;
    return key.includes(keyObject) && value;
  })
  return keys.map((r) => r[1]);
};

export const managerRecipes = (recipe: mealRecipe | drinkRecipe) : Recipe => {

  const ingredients = filterkeys(recipe, 'strIngredient');
  const measures = filterkeys(recipe, 'strMeasure');

  return {
    type: 'idMeal' in recipe ? 'meals' : 'drinks',
    id: 'idMeal' in recipe ? recipe.idMeal : recipe.idDrink,
    name: 'strMeal' in recipe ? recipe.strMeal : recipe.strDrink,
    img: 'strMeal' in recipe ? recipe.strMealThumb : recipe.strDrinkThumb,
    category: recipe.strCategory,
    ingredients: ingredients,
    instructions: recipe.strInstructions,
    measures,
    youtube: 'idMeal' in recipe ? recipe.strYoutube : "",
  }
}

export const managerListRecipes = (recipes: mealRecipe[] | drinkRecipe[]) => {
  return recipes.map((recipe) => managerRecipes(recipe));
}

export const managerLocation = () => {
  const { pathname } = window.location
  return pathname.split("/")[1] === "meals" ? "meals" : "drink";
}

export const sharing = (recipeId: string) => {
  navigator.clipboard.writeText(window.location.host + '/meals/' + recipeId)
  alert('Link copiado!')
}

export const unfavorite = (recipe: Recipe, key: string) => {
  removeStorage(key,recipe)
  window.location.reload()
}