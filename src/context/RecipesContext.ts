import { createContext } from "react";
import { RecipesContextType } from "../utils/types";


const RecipesContext = createContext({} as RecipesContextType)

export default RecipesContext