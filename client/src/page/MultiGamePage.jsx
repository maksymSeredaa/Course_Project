import React from 'react';
import { useLocation } from 'react-router-dom';
import AlertConection from '../components/AlertConection/AlertConection';
import styles from './MultiGamePage.module.css'; // Импортируем CSS-модуль

function MultiGamePage() {
  const location = useLocation();
  const gameData = location.state;

  return (
    <div className={styles.container}>
      <AlertConection />

      <div className={styles.gameInfo}>
        <h3>Game Information</h3>
        <p><strong>Game ID:</strong> {gameData?.gameId}</p>
        <p><strong>Game Name:</strong> {gameData?.gameName}</p>
        <p><strong>Secret Password:</strong> {gameData?.secretPassword}</p>
      </div>
    </div>
  );
}

export default MultiGamePage;
