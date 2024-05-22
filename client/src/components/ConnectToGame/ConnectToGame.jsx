
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './ConnectToGame.module.css'; // Используйте `css` вместо `css`

const ConnectToGame = () => {
  const formik = useFormik({
    initialValues: {
      gameId: '',
      password: '',
    },
    validationSchema: Yup.object({
      gameId: Yup.string()
        .required('Game ID is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: values => {
      // Handle form submission
      console.log('Form values:', values);
    },
  });

  return (
    <div className={css['connect-to-game-container']}> {/* Обращайтесь к классу через объект `css` */}
      <h2>Connect to Game</h2>
      <form onSubmit={formik.handleSubmit} className={css['connect-to-game-form']}> {/* Обращайтесь к классу через объект `css` */}
        <div className={css['form-group']}> {/* Обращайтесь к классу через объект `css` */}
          <label htmlFor="gameId">Game ID</label>
          <input
            type="text"
            id="gameId"
            name="gameId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gameId}
            className={formik.touched.gameId && formik.errors.gameId ? css['input-error'] : ''} 
          />
          {formik.touched.gameId && formik.errors.gameId ? (
            <span className={css['error-text']}>{formik.errors.gameId}</span> 
          ) : null}
        </div>
        <div className={css['form-group']}> 
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={formik.touched.password && formik.errors.password ? css['input-error'] : ''} 
          />
          {formik.touched.password && formik.errors.password ? (
            <span className={css['error-text']}>{formik.errors.password}</span> 
          ) : null}
        </div>
        <button type="submit" className={css['connect-button']}>Connect</button> 
      </form>
    </div>
  );
};

export default ConnectToGame;
