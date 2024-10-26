import { useState } from 'react'
import { INITIAL_FORMS, Forms_Login } from '../../utils/types'
// import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logoIcon from "../../images/logo Recipes App.svg";


function Login() {
  const [formsLogin, setFormsLogin] = useState <Forms_Login>(INITIAL_FORMS)
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormsLogin({
      ...formsLogin,
      [name]: value
    })}

    function handleSubmit() {
      navigate('/meals')
    }

  return (
    <div className='flex flex-col justify-center'>
      <img className='size-40 self-center' src={ logoIcon } alt="Logo da Receita" />

      <div className="flex flex-col text-center border-2 border-solid border-black rounded-2xl p-10 size-full">
        <h1 className='my-3' >Login</h1>
        <form className='flex flex-col my-3' action="" method="post">
          <label htmlFor="email">
            <input
            className='bg-gray-100 rounded-md p-2' 
            placeholder='Email'
            type="email"
            name="email"
            id="email"
            value={ formsLogin.email }
            onChange={ handleChange }/>
          </label>
          <label htmlFor="password">
            <input
            className='bg-gray-100 rounded-md p-2 my-0.5'
            placeholder='Senha'
            type="password"
            name="password"
            id="password" 
            value={ formsLogin.password } 
            onChange={ handleChange }/>
          </label>
          <button className='my-2' type="submit" onClick={ handleSubmit }>Entrar</button>
        </form>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </div>
  )
}

export default Login