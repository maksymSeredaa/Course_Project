import React from 'react';
import styles from './StatisticItem.module.css'; // Import the CSS module

function StatisticItem({ label, value, opponent, winner, points1, points2 }) {
  return (
    <div className={styles.row}>
      <div className={styles.cell}>{label}</div>
      {opponent && <div className={styles.cell}>{opponent}</div>}
      {winner && <div className={styles.cell}>{winner}</div>}
      {points1 !== undefined && <div className={styles.cell}>{points1}</div>}
      {points2 !== undefined && <div className={styles.cell}>{points2}</div>}
      {value !== undefined && <div className={styles.cell}>{value}</div>}
    </div>
  );
}

export default StatisticItem;
