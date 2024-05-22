import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';  // Імпортуємо бібліотеку uuid
import { useNavigate } from 'react-router-dom';
import './CreateGame.module.css';
import { createGame } from '../../services/gameRouter';

const CreateGame = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      gameId: uuidv4(), 
      gameName: '',
      secretPassword: '',
    },
    validationSchema: Yup.object({
      gameName: Yup.string()
        .required('Game name is required'),
      secretPassword: Yup.string()
        .required('Secret password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Create game in the database
        await createGame(values);
        console.log('Game created:', values);

        // Navigate to /multi-gamePage with game values
        navigate('/multi-gamePage', { state: values });
      } catch (error) {
        console.error('Failed to create game:', error);
      }
    },
  });

  return (
    <div className="create-game-container">
      <h2>Create New Game</h2>
      <form onSubmit={formik.handleSubmit} className="create-game-form">
        <div className="form-group">
          <label htmlFor="gameName">Game Name</label>
          <input
            type="text"
            id="gameName"
            name="gameName"
            value={formik.values.gameName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.gameName && formik.errors.gameName ? 'input-error' : ''}
          />
          {formik.touched.gameName && formik.errors.gameName && <span className="error-text">{formik.errors.gameName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="secretPassword">Secret Password</label>
          <input
            type="password"
            id="secretPassword"
            name="secretPassword"
            value={formik.values.secretPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.secretPassword && formik.errors.secretPassword ? 'input-error' : ''}
          />
          {formik.touched.secretPassword && formik.errors.secretPassword && <span className="error-text">{formik.errors.secretPassword}</span>}
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default CreateGame;
