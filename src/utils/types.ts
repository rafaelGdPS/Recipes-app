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
}

export type drinkRecipe = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
}

export type Recipe = {
  id: drinkRecipe | mealRecipe['idMeal'],
  name: mealRecipe['strMeal'] | drinkRecipe['strDrink'],
  img: mealRecipe['strMealThumb'] | drinkRecipe['strDrinkThumb'],
}