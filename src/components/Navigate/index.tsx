import { Link } from "react-router-dom";
import profileIcon from "../../images/profileIcon.svg";

function Navigate() {
  return (
    <nav>
      <Link to='/meals'>Home</Link>
      <Link to='/dones-recipes'>Receitas Feitas</Link>
      <Link to='/profile'><img src={ profileIcon } alt="Profile buton" /></Link>
      
    </nav>
  )
}

export default Navigate;