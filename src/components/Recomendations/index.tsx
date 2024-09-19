import { useContext, useEffect, useState } from "react";
import RecipesContext from "../../context/RecipesContext";
import { allFetch, managerListRecipes, managerLocation } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import style from "./Recomendation.module.css";

function Recomentations() {
  const [recomendation, setRecomendation] = useState([]);
  const [display, setDisplay] = useState(0);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const navigate = useNavigate();
  
  const defineClass = (index: number) => {
    return display === index || display + 1 === index ? 'scrool-image' : 'scrool-no-image'
  }

  const handleNext = () => {
    display === 4 ? setDisplay(0) : setDisplay(display + 2);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    setRecipes(recomendation);
    navigate(`/${managerLocation() === "meals" ? "drinks" : "meals"}/${id}`);
  }

  useEffect(() => {

    const recomendationRecipes = async () => {
      const location = managerLocation() === "meals" ? "cocktail" : "meal";
      const url = `https://www.the${location}db.com/api/json/v1/1/search.php?s=`;
      const response = await allFetch(url);
      const data = response.meals || response.drinks;
      const recomendation = data.slice(0, 6);
      setRecomendation(recomendation);
    }
    recomendationRecipes();
  }, [recipes])

  return (
    <div>
      <h2>Recomendações</h2>
      {managerListRecipes(recomendation).map((recipe, index) => (
        <button key={index} id={ `${index}` } onClick={ handleClick }
        className={ `${style[defineClass(index)]}` }>
         <div>
          <h3>{recipe.name}</h3>
          <img src={recipe.img} alt={recipe.name} />
         </div>
        </button>
      ))}
      <button onClick={ handleNext }>Next</button>
    </div>
  );
}

export default Recomentations;