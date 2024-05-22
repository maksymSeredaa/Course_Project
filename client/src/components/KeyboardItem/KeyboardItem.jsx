import React from 'react';
import styles from '../Keyboard/Keyboard.module.css'; // Ensure the path is correct based on your project structure

function KeyboardItem({ keyData, setInput, activeKey ,nextChar}) {
  const isActive = keyData.label.toLowerCase() === nextChar.toLowerCase();
  const itemStyle = isActive ? { boxShadow: "1px 1px 2px", border: "3px solid", boxSizing: "box-border" } : {};


  return (
    <div
      key={keyData.label} // Using label as key since index isn't available here
      className={`${styles.key} ${styles[keyData.class]} ${styles[`key${keyData.size.charAt(0).toUpperCase() + keyData.size.slice(1)}`]} ${activeKey.toUpperCase() === keyData.label ? styles.keyActive : ''}`}
      onClick={() => setInput(prev => prev + keyData.label)
        
      }
      style={itemStyle}
    >
      {keyData.label} {keyData.position ? `(${keyData.position})` : ''}
    </div>
  );
}

export default KeyboardItem;
