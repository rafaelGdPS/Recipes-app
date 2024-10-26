import { useLocation } from "react-router-dom";
import searchIcon from "../../images/searchIcon.svg";
import { useState } from "react";
import SearchBar from "../Search-bar/SearchBar";
import Navigate from "../Navigate";

function Header() {
  const [searchStatus, setSearchStatus] = useState(false);
  const { pathname } = useLocation();
    
  const title = pathname.substring(1).replace(/^\w/, (c) => c.toUpperCase());
  
  return (
    <header className="flex flex-col text-center content-center ">
      <h1>{ title.split("-")[0] }</h1>
      <nav className="flex flex-col text-center">
          <Navigate />
          <button className=" self-center my-4" onClick={ () => setSearchStatus(!searchStatus) }> <img src={ searchIcon } alt="Search buton" /> </button>
          { searchStatus && <SearchBar />}
      </nav>
    </header>
  );
}

export default Header;