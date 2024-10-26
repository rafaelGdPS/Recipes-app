import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <footer>
      <nav className='flex justify-evenly'>
        <button onClick={ () => navigate("/meals") }><img src={ mealIcon } alt="" /></button>
        <button onClick={ () => navigate("/drinks") }><img src={ drinkIcon } alt="" /></button>
      </nav>
    </footer>
  );
}

export default Footer;