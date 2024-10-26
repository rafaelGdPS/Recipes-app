import React, { useState } from "react"
import { INITIAL_FORMS_SEARCH } from "../../utils/types"
import { allFetch } from "../../utils/Utils"
import { useLocation } from "react-router-dom"

function SearchBar() {
  const [formFilter, setFormFilter] = useState(INITIAL_FORMS_SEARCH)
  const { pathname } =  useLocation()

  const location = pathname.split("/")[1] === "meals" ? "meal" : "cocktail"

  const url = {
    ingredient: `https://www.the${location}db.com/api/json/v1/1/filter.php?i=${formFilter.search}`,
    name: `https://www.the${location}db.com/api/json/v1/1/search.php?s=${formFilter.search}`,
    first_letter: `https://www.the${location}db.com/api/json/v1/1/search.php?f=${formFilter.search}`,
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target
    setFormFilter({
      ...formFilter,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement|HTMLButtonElement>) => {
    e.preventDefault()
    const data = await allFetch(url[formFilter.filter])
    console.log(data)
  }

  return (
    <div>
      <form className="flex flex-col items-center" action="">
        <div>

      <input
      className="border-2 border-black rounded-lg" 
      type="text" 
      placeholder="Search..." 
      name="search" 
      value={ formFilter.search }  
      onChange={ handleChange }
      />
      </div>
      <div className="flex my-3 w-2/4 justify-around items-center">

      <label className=" flex " htmlFor="ingredient">
        <input 
        type="radio" 
        name="filter" 
        id="ingredient" 
        value="ingredient" 
        onChange={ handleChange }
        />
        Ingrediente
        </label>

        <label className=" flex" htmlFor="name">
        <input 
        type="radio" 
        name="filter" 
        id="name" 
        value="name" 
        onChange={ handleChange }
        />
          Nome
          </label>
        <label className=" flex" htmlFor="first-letter">
        <input 
        type="radio" 
        name="filter" 
        id="first-letter" 
        value="first_letter" 
        onChange={ handleChange }
        />
            Primeira letra
        </label>
        </div>
          <button  className="mb-4" type="submit" onClick={ handleSubmit }>Search</button>
      </form>
    </div>
  )
}

export default SearchBar