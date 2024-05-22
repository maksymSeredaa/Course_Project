import React from 'react';
import css from './AlertConection.module.css';

function AlertConection() {
  return (
    <div className={css.alertContainer}>
      <p className={css.alertText}>Чекаємо підключення 2 гравця</p>
    </div>
  );
}

export default AlertConection;
