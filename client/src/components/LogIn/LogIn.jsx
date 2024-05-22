
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './LogIn.module.css';
import { userLogin } from '../../services/userRouter';

function LogIn({onSuccess}) {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      const response = await userLogin(values);
     
      onSuccess(JSON.stringify(response, null, 2))
      // You can redirect the user or perform any other necessary actions here
    } catch (error) {
      if (error.message === 'User not found') {
        alert('User not found');
      } else if (error.message === 'Invalid password') {
        alert('Invalid password');
      } else {
        alert('An error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <button type="submit" disabled={isSubmitting}>Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LogIn;
