import React, { useContext } from "react";
import { CategoryObject } from "../../utils/types";
import RecipesContext from "../../context/RecipesContext";
import { allFetch } from "../../utils/Utils";

type CategoriesProps = {
  categories: CategoryObject[]
};

function Categories({ categories }: CategoriesProps) {
  const { setRecipes, allRecipes }  = useContext(RecipesContext);
  const [prevCategory, setPrevCategory] = React.useState("");
  const location = window.location.pathname.split("/")[1] === "meals" ? "meal" : "cocktail";

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.textContent

    if (category === "Todas" || category === prevCategory) {
      setRecipes(allRecipes)
      setPrevCategory("");
      return;
    }
    setPrevCategory(category ?? "");
    const categoryRecipes = await allFetch(`https://www.the${location}db.com/api/json/v1/1/filter.php?c=${category}`);
    const data = (categoryRecipes.meals || categoryRecipes.drinks).slice(0, 12);
    setRecipes(data);
    ;
    
    
  }

  return (
    <nav className="flex  justify-center">
    {categories.map((category) => (
      <button className="mx-2" onClick={ handleClick } key={ category.strCategory }>
        {category.strCategory}
      </button>
    ))}
    <button className="mx-2" onClick={ handleClick }>Todas</button>
  </nav>
  );
}

export default Categories;