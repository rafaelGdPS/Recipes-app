export type Forms_Login = {
  email: string
  password: string
}

export const INITIAL_FORMS: Forms_Login = {
  email: '',
  password: ''
}

export type Forms_Search = {
  search: string
  filter: 'ingredient' | 'name' | 'first_letter'
}

export const INITIAL_FORMS_SEARCH: Forms_Search = {
  search: '',
  filter: 'ingredient'
}

export type mealRecipe = {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
  strCategory: string,
  strInstructions: string,
}

export type drinkRecipe = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
  strCategory: string,
  strInstructions: string,
}

export type Recipe = {
  id: string,
  name: string,
  img: string,
  category: string,
  ingredients: string[],
  instructions: string,
  measures: string[],
}

export type CategoryObject = {
  strCategory: string
};

export type RecipesContextType = {
  recipes: mealRecipe[] | drinkRecipe[],
  setRecipes: React.Dispatch<React.SetStateAction<mealRecipe[] | drinkRecipe[]>>,
  allRecipes: mealRecipe[] | drinkRecipe[],
  setAllRecipes: React.Dispatch<React.SetStateAction<mealRecipe[] | drinkRecipe[]>>,
}