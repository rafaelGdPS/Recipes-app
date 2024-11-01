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
  strYoutube: string,
}

export type drinkRecipe = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
  strCategory: string,
  strInstructions: string,
}

export type Recipe = {
  type: 'meals' | 'drinks',
  id: string,
  name: string,
  img: string,
  category: string,
  ingredients: string[],
  instructions: string,
  measures: string[],
  youtube: string,
}
export const RECIPE_INITIAL = {
  type: '',
  id: '',
  name: '',
  img: '',
  category: '',
  ingredients: [],
  instructions: '',
  measures: [],
  youtube: '',
}

export type CategoryObject = {
  strCategory: string
};

export type RecipesContextType = {
  recipes: Recipe[],
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
  allRecipes: Recipe[],
  setAllRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
  recipeDetails: Recipe,
  setRecipeDetails: React.Dispatch<React.SetStateAction<Recipe>>,
}