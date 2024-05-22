
import { useNavigate } from 'react-router-dom';
import css from './Name.module.css';

function Name({ name }) {
  const navigate = useNavigate();

  const handleViewStats = () => {
    navigate('/statistic'); // Navigate to the Statistic route
  };

  return (
    <div className={css.Name} onClick={handleViewStats}>
      Статистика користувача: <b>{name}</b>
      
    </div>
  );
}

export default Name;
