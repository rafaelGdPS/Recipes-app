import { Checked } from "../pages/RecipeInProgress";
import { Recipe } from "./types";

export const getStorage = (key: string): Recipe[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setStorage = (key: string, value: Recipe | Checked) => {
  const data = getStorage(key);
  if (Object.keys(value).includes('id')) {
    const veryfy = data.some((item: Recipe | Checked ) => item.id === value.id);
    if (veryfy === true) return;
    
    localStorage.setItem(key, JSON.stringify([...data, value]));
  }
  localStorage.setItem(key, JSON.stringify([value]));
  

  
}

export const removeStorage = (key: string, value: Recipe) => {
  const data = getStorage(key)
  
  const newData = data.filter((item: Recipe) => item.id != value.id)
  
  localStorage.setItem(key, JSON.stringify(newData))
}