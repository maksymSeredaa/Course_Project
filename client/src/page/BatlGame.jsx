import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BatlGame.module.css';

function BatlGame() {
  const navigate = useNavigate();

  const handleCreateGameClick = () => {
    navigate('/create-game');
  };
  const handleConectGameClick = () => {
    navigate('/conect-game');
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItem} onClick={handleCreateGameClick}>Створити гру</div>
      <div className={styles.menuItem} onClick={handleConectGameClick}>Підключитись до гри</div>
    </div>
  );
}

export default BatlGame;
