function Register() {
  return (
    <form className="flex flex-col p-10 border-2 border-solid borrder-black" action="">
      <label htmlFor="name">
        <input
        placeholder="Nome" 
        type="text" 
        name="name" 
        id="name"/>
      </label>
      <label htmlFor="email">
        <input
        placeholder="Email" 
        type="email" 
        name="email" 
        id="email"
        />
      </label>
      <label htmlFor="password">
        <input
        placeholder="Senha" 
        type="password" 
        name="password" 
        id="password"/>
      </label>
      <label htmlFor="verify-password">
        <input
        placeholder="Confirme a senha" 
        type="password" 
        name="verify-password" 
        id="verify-password"/>
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Register