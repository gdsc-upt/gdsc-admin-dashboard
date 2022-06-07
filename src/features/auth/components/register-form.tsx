import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import React from 'react';
import { RegisterRequest } from '../models';
import { useRouting } from '../../../routing';
import { register } from '../services';
import { AUTH_URLS } from '../helpers';

const initialValues: RegisterRequest = {
  username: 'admin',
  email: 'admin@example.com',
  password: 'admin',
};

export function RegisterForm() {
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

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <div>
          <Form className="Form">
            <span className="title">Admin Dashboard Register</span>

            <Field type="text" name="username" placeholder="Enter your username" />

            <Field type="email" name="email" placeholder="Enter your email" />

            <Field type="password" name="password" placeholder="Enter your password" />

            <button disabled={isSubmitting} type="submit">
              Register
            </button>

            <span>
              Already have an account? <Link to="/login">Log in</Link>
            </span>
          </Form>
        </div>
      )}
    </Formik>
  );
}
