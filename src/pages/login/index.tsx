import { useState } from 'react'
import { INITIAL_FORMS, Forms_Login } from '../../utils/types'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'


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
      navigate('/home-page')
    }

  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post">
        <label htmlFor="email">
          <input
          type="email"
          name="email"
          id="email"
          value={ formsLogin.email }
          onChange={ handleChange }/>
        </label>
        <label htmlFor="password">
          <input
          type="password"
          name="password"
          id="password" 
          value={ formsLogin.password } 
          onChange={ handleChange }/>
        </label>
        <button type="submit" onClick={ handleSubmit }>Entrar</button>
      </form>
      <Link to="/register">Cadastre-se</Link>
    </div>
  )
}

export default Login