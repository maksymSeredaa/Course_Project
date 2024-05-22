import React, { useState, useEffect, useRef } from 'react';
import css from './Timer.module.css';
import { createSingleGame } from '../../services/singleGameRouter';

function Timer({ onTimeEnd, score, id }) {
  const initialTime = 10; // Initial time in seconds
  const [time, setTime] = useState(initialTime);
  const hasEndedRef = useRef(false); // useRef to ensure the function is called only once

  const resetTimer = () => {
    setTime(initialTime);
    hasEndedRef.current = false;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentTime => {
        console.log(score)
        if (currentTime <= 0) {
          if (!hasEndedRef.current) {
            hasEndedRef.current = true; // Set flag to true to prevent further calls
            clearInterval(timer); // Clear interval immediately

            createSingleGame({ score: score, user_id: id, game_name: "game" })
              .then(() => {
                onTimeEnd(); // Call the passed callback function when time ends
              })
              .catch(error => {
                console.error('Error saving result to the database', error);
              });
          }
          return initialTime; // Optionally restart the timer or handle as needed
        }
        return currentTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeEnd, score, id]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { minutes, seconds } = formatTime();

  return (
    <div className={css.timer}>
      <div className={css.timeBox}>{minutes}</div>
      <div className={css.timeBox}>{seconds}</div>
      
    </div>
  );
}

export default Timer;
