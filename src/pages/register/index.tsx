function Register() {
  return (
    <form action="">
      <label htmlFor="name">
        <input type="text" name="name" id="name"/>
      </label>
      <label htmlFor="email">
        <input type="email" name="email" id="email"/>
      </label>
      <label htmlFor="password">
        <input type="password" name="password" id="password"/>
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Register