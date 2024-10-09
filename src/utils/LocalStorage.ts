import { Recipe } from "./types";

export const getStorage = (key: string): Recipe[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setStorage = (key: string, value: Recipe) => {
  const data = getStorage(key);
  const veryfy = data.some((item: Recipe) => item.id === value.id);
  if (veryfy) return;
  localStorage.setItem(key, JSON.stringify([...data, value]));
}

export const removeStorage = (key: string, value: Recipe) => {
  const data = getStorage(key)
  
  const newData = data.filter((item: Recipe) => item.id != value.id)
  
  localStorage.setItem(key, JSON.stringify(newData))
}