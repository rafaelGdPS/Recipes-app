import { useLocation, useNavigate } from "react-router-dom";
import profileIcon from "../../images/profileIcon.svg";
import searchIcon from "../../images/searchIcon.svg";
import { useState } from "react";

function Header() {
  const [searchStatus, setSearchStatus] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
    
  const title = pathname.substring(1).replace(/^\w/, (c) => c.toUpperCase());
  
  return (
    <header>
      <h1>{ title.split("-")[0] }</h1>
      <nav>
          <button onClick={ () => navigate("/profile") }> <img src={ profileIcon } alt="Profile buton" /> </button>
          <button  onClick={ () => setSearchStatus(!searchStatus) }> <img src={ searchIcon } alt="Search buton" /> </button>
      </nav>
    </header>
  );
}

export default Header;