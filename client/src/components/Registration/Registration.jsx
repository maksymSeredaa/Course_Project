
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Registration.module.css';
import { addUser } from '../../services/userRouter';  // Make sure the import path is correct

function Registration({ onSuccess }) {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await addUser({ 
        username: values.username, 
        email: values.email, 
        password: values.password 
      });
     
      onSuccess(JSON.stringify(response, null, 2))
      // Redirect or additional actions after successful registration can be added here
    } catch (error) {
      // Error handling logic can be more specific based on the error details received
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
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className={styles.error} />
            </div>
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
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
            </div>
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
