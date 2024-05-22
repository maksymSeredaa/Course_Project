import React, { useState, useEffect } from 'react';

import keys from "../../data/keyboardLayout.json";
import KeyboardItem from '../KeyboardItem/KeyboardItem';
import styles from './Keyboard.module.css';


const Keyboard = ({nextChar}) => {
  const [input, setInput] = useState("");
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInput(prevInput => prevInput + event.key);
      setActiveKey(event.key);
    };

    const handleKeyUp = (event) => {
      if (event.key === activeKey) {
        setActiveKey("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeKey]);

  return (
    <>
      <div className={styles.keyboardWrapper}>
        {keys.map((key, index) => (
         
          
          <KeyboardItem key={index} keyData={key} setInput={setInput} activeKey={activeKey} nextChar={nextChar} />
        ))}
        <div className = {styles.keySpace}>             </div>
      </div>
    </>
  );
};

export default Keyboard;
