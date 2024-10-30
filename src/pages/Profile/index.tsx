import { useNavigate } from "react-router-dom";
import Navigate from "../../components/Navigate";

function Profile() {
  const navigate = useNavigate()
  const handleLogout = () => {

    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
      <h1>Profile</h1>
      <div>
      < Navigate />
      <button onClick={ handleLogout } >Logout</button>
      </div>
    </div>
  );
}

export default Profile;