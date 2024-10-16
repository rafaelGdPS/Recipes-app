import { RecipesInProgress } from "../pages/RecipeInProgress";
import { Recipe } from "./types";

export const getStorage = (key: string): Recipe[] | RecipesInProgress[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const removeStorage = (key: string, value: Recipe | RecipesInProgress) => {
  const data = getStorage(key)
  if (Object.keys(value).includes('id')) {
    const newData = data.filter((item: Recipe | RecipesInProgress) => item.id != value.id)
    
    localStorage.setItem(key, JSON.stringify(newData))
  }
  
}

const inProgresseStorage = (value: Recipe | RecipesInProgress) => {
  const dataStorage = getStorage('inProgressRecipes');

  
  if (dataStorage.length === 0) {
    return [...dataStorage, value]
  }

  const veryfyObject = dataStorage.some((item: Recipe | RecipesInProgress) => item.id === value.id)

  if (veryfyObject === false) {
    return [...dataStorage, value]
  }
    const newDataStorage = dataStorage.map((item: Recipe | RecipesInProgress) => {
      console.log(item.id);
      console.log(value.id);
      
      if (item.id === value.id) {

        return value
      }
      return item
    })
    return newDataStorage

}

export const setStorage = (key: string, value: Recipe | RecipesInProgress) => {
  const data = getStorage(key);
  console.log(data);
  
  if (Object.keys(value).includes('name')) {
    const veryfy = data.some((item: Recipe | RecipesInProgress ) => item.id === value.id);
    console.log(veryfy);
    
    if (veryfy === true) return;
    const newData = [...data, value];
    console.log(newData);
    
    localStorage.setItem(key, JSON.stringify(newData));
    return;
  }
   
  localStorage.setItem(key, JSON.stringify(inProgresseStorage(value)));
  

  
}

