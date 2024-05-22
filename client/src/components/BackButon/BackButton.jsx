import React from 'react'
import css from "./BackButton.module.css"
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/menu');
    };
  return (
    <button className={css.Backbtn} onClick={handleMenuClick}>Меню</button>
  )
}

export default BackButton