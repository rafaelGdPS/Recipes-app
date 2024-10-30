import { Link } from "react-router-dom";
import profileIcon from "../../images/profileIcon.svg";

function Navigate() {
  return (
    <nav className=" flex justify-around mt-3">
      <Link to='/meals'>Home</Link>
      <Link to='/done-recipes'>Receitas Feitas</Link>
      <Link to='/favorite-recipes'>Favoritos</Link>
      <Link to='/profile'><img src={ profileIcon } alt="Profile buton" /></Link>
      
    </nav>
  )
}

export default Navigate;