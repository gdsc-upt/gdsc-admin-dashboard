import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import React from 'react';
import { useRouting } from '../../../routing';
import { LoginRequest } from '../models';
import { login } from '../services';
import { URLS } from '../../../helpers/constants';
import { AUTH_URLS } from '../helpers/constants';

const initialValues: LoginRequest = {
  username: 'admin',
  password: 'admin',
};

export function LoginForm() {
  const { routeTo } = useRouting();

  const tryLogin = async ({ password, username }: LoginRequest) => {
    const response = await login(username, password);
    if (response) {
      console.log('go to dashboard');
      return routeTo(URLS.dashboard);
    }

    return routeTo(AUTH_URLS.login);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={tryLogin}>
      {({ isSubmitting }) => (
        <div>
          <Form className="Form">
            <span className="title">Admin Dashboard</span>

            <Field type="text" name="username" placeholder="Enter your email or username" />
            <ErrorMessage name="username" component="div" />

            <Field type="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" />

            <button disabled={isSubmitting} type="submit">
              LOGIN
            </button>

            <span>
              No account? <Link to="/register">Register</Link>
            </span>
          </Form>
        </div>
      )}
    </Formik>
  );
}
