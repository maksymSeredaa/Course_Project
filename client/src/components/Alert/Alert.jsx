import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Alert.module.css';
import timerImage from '../../img/timer.png';

function Alert({ onRetry }) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleRetryClick = () => {
    onRetry();
    navigate('/single-game'); 
  };

  return (
    <div className={css.alertContainer}>
      <img src={timerImage} alt="Timer" />
      <div className={css.alertMessage}>Ваш час вичерпано!</div>
      <button className={css.alertButton} onClick={handleMenuClick}>Меню</button>
      <button className={css.alertButton} onClick={handleRetryClick}>Нова спроба</button>
    </div>
  );
}

export default Alert;
