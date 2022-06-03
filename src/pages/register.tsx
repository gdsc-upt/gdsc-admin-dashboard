import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useRouting } from '../routing';
import { register } from '../services/auth.service';
import { RegisterRequest } from '../models/register-request';
import { AUTH_URLS } from '../helpers/constants';

const styles = {
  header: {
    paddingLeft: '3em',
    paddingRight: '3em',
  },
};

const initialValues: RegisterRequest = {
  username: 'admin',
  email: 'admin@example.com',
  password: 'admin',
};

export function RegisterPage() {
  const { routeTo } = useRouting();

  const onSubmit = async ({ username, email, password }: RegisterRequest) => {
    const response = await register(username, email, password);
    // if (response) {
    //   return routeTo(urls.dashboard);
    // }
    if (!response) {
      console.error('Error');
    }

    return routeTo(AUTH_URLS.login);
  };

  // Formik will be used for all types of forms

  return (
    <div className="Login">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <div style={styles.header}>
              <img
                src={require('../assets/images/gdsc-logo-and-text.png').default}
                alt="GDSC logo"
              />
            </div>
            <Form className="Form">
              <span className="title">Admin Dashboard Register</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <button type="submit">LOGIN</button>

              <span>
                Already have an account? <Link to="/login">Log in</Link>
              </span>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
