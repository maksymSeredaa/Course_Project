import React from 'react';
import styles from './Menu.module.css'; // Importing CSS module
import Name from '../Name/Name';
function Menu({ onSelectGame ,data}) {
  return (
    <div className={styles.menuContainer}>
       <Name name={data.username} id={data.user_id} />
      <div className={styles.menuItem} onClick={() => onSelectGame('Одиночна гра')}>
        Одиночна гра
      </div>
      <div className={styles.menuItem} onClick={() => onSelectGame('Дуель')}>
        Дуель
      </div>
    </div>
  );
}

export default Menu;
