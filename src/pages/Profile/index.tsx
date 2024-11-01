import { useNavigate } from "react-router-dom";
import Navigate from "../../components/Navigate";

function Profile() {
  const navigate = useNavigate()
  const handleLogout = () => {

    localStorage.clear()
    navigate('/')
  }
  return (
    <main>
      <h1>Perfil do usuario</h1>
      <div>
      < Navigate />
      <button onClick={ handleLogout } >Logout</button>
      </div>
    </main>
  );
}

export default Profile;