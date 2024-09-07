import React, { useState } from "react"
import { INITIAL_FORMS_SEARCH } from "../../utils/types"
import { allFetch } from "../../utils/Utils"
import { useLocation } from "react-router-dom"

function SearchBar() {
  const [formFilter, setFormFilter] = useState(INITIAL_FORMS_SEARCH)
  const { pathname } =  useLocation()

  const location = pathname.split("/")[1] === "meals" ? "meals" : "drinks"

  console.log(location);
  


  const url = {
    drinks: {
      ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formFilter.search}`,
      name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formFilter.search}`,
      first_letter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${formFilter.search}`,
    },
    meals: {
      ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${formFilter.search}`,
      name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${formFilter.search}`,
      first_letter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${formFilter.search}`,
    }
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
    const data = await allFetch(url[location][formFilter.filter])
    console.log(data)
  }

  return (
    <div>
      <form action="">
      <input 
      type="text" 
      placeholder="Search..." 
      name="search" 
      value={ formFilter.search }  
      onChange={ handleChange }
      />
      <input 
      type="radio" 
      name="filter" 
      id="ingredient" 
      value="ingredient" 
      onChange={ handleChange }
      />
      <label htmlFor="ingredient">Ingrediente</label>
      <input 
      type="radio" 
      name="filter" 
      id="name" 
      value="name" 
      onChange={ handleChange }
      />
      <label htmlFor="name">Nome</label>
      <input 
      type="radio" 
      name="filter" 
      id="first-letter" 
      value="first_letter" 
      onChange={ handleChange }
      />
      <label htmlFor="first-letter">Primeira letra</label>
      <button type="submit" onClick={ handleSubmit }>Search</button>
      </form>
    </div>
  )
}

export default SearchBar