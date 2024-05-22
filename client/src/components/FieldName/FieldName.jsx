import React, { useState } from 'react';
import css from "./FieldName.module.css";

function FieldName({ setNameInApp }) {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOkClick = () => {
    if (name.trim()) { // Check if the name is not just empty spaces
      setNameInApp(name); // Send the name to the App component
      setIsSubmitted(true); // Set isSubmitted to true to hide the component
    }
  };

  if (isSubmitted) {
    return null; // Do not render anything if the name has been submitted
  }

  return (
    <div className={css.container}>
      <input
        className={css.inputField}
        placeholder="Напиши своє ім'я"
        value={name}
        onChange={handleNameChange}
      />
      <button className={css.button} onClick={handleOkClick}>OK</button> 
    </div>
  );
}

export default FieldName;
