import React, { useState } from 'react';
import Registration from '../components/Registration/Registration';
import LogIn from '../components/LogIn/LogIn';
import styles from './RegLogIn.module.css'; // Подключаем CSS модуль

function RegLogIn({onLogin}) {
  const [selectedOption, setSelectedOption] = useState('registration'); // Состояние для отслеживания выбора

  // Обработчики для изменения выбора
  const handleSelectRegistration = () => {
    setSelectedOption('registration');
  };

  const handleSelectLogin = () => {
    setSelectedOption('login');
  };

  return (
    <div>
      <div className={styles['option-buttons']}>
        <button onClick={handleSelectRegistration}>Registration</button> {/* Кнопка выбора регистрации */}
        <button onClick={handleSelectLogin}>Login</button> {/* Кнопка выбора входа */}
      </div>
      <div>
        {/* Условное отображение компонентов в зависимости от выбора */}
        {selectedOption === 'registration' ? <Registration onSuccess={onLogin} /> : <LogIn onSuccess={onLogin} />}
      </div>
    </div>
  );
}

export default RegLogIn;
