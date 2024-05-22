import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatisticItem from "../StatisticItem/StatisticItem";
import styles from './Statistic.module.css'; // Ensure this matches the filename exactly
import {getSingleGameById} from "../../services/singleGameRouter"
function Statistic({id}) {
  const [selectedTab, setSelectedTab] = useState('singleGame');
  const navigate = useNavigate();
  const [singleGameStats, setSingleGameStats] = useState([]);
  const [error, setError] = useState(null);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleBackToMenu = () => {
    navigate('/menu');
  };



  useEffect(() => {
    const fetchSingleGameStats = async () => {
      try {
        const response = await getSingleGameById(id);
        setSingleGameStats(response); // Set the state with the fetched data
      } catch (error) {
        console.error('Failed to fetch single game stats:', error);
        setError('Failed to fetch single game stats. Please try again later.');
      }
    };

    fetchSingleGameStats();
  }, []); 
  console.log(singleGameStats);
  const duelStats = [
    { number: 1, opponent: 'Player A', winner: 'Player A', points1: 100, points2: 80 },
    { number: 2, opponent: 'Player B', winner: 'Player B', points1: 150, points2: 160 },
    { number: 3, opponent: 'Player C', winner: 'Player C', points1: 90, points2: 100 },
  ];

  return (
    <div className={styles.statisticContainer}>
      <div className={styles.tabs}>
        <button onClick={() => handleTabChange('singleGame')}>Статистика Одиночної гри</button>
        <button onClick={() => handleTabChange('duel')}>Статистика Дуелів</button>
      </div>
      <div className={styles.statisticContent}>
        {selectedTab === 'singleGame' && (
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.cell}>Номер гри</div>
              <div className={styles.cell}>Бали</div>
            </div>
            {singleGameStats.map((item, index) => (
              <StatisticItem key={index} label={`${item.game_id}`} value={item.score} />
            ))}
          </div>
        )}
        {selectedTab === 'duel' && (
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.cell}>Номер</div>
              <div className={styles.cell}>Ім'я опонента</div>
              <div className={styles.cell}>Хто виграв</div>
              <div className={styles.cell}>Бали першого гравця</div>
              <div className={styles.cell}>Бали другого гравця</div>
            </div>
            {duelStats.map((item, index) => (
              <StatisticItem
                key={index}
                label={`Номер ${item.number}`}
                opponent={item.opponent}
                winner={item.winner}
                points1={item.points1}
                points2={item.points2}
              />
            ))}
          </div>
        )}
      </div>
      <button className={styles.backButton} onClick={handleBackToMenu}>Повернутися до меню</button>
    </div>
  );
}

export default Statistic;
