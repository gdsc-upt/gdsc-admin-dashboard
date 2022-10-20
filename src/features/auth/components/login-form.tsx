import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { AxiosError } from 'axios';
import { LoginRequest } from '../models';
import { login } from '../services';
import { URLS } from '../../../helpers/constants';

const initialValues: LoginRequest = {
  username: 'admin',
  password: 'admin',
};

export function LoginForm() {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleError = (apiError: AxiosError) => {
    console.log(apiError);
    if (apiError.response?.status === 401) {
      return setError('Invalid username or password');
    }

    return setError('Something went wrong :(');
  };

  const tryLogin = async ({ password, username }: LoginRequest) => {
    const response = await login(username, password).catch(handleError);
    console.log(response);
    if (response?.status === 200) {
      return redirect(URLS.dashboard);
    }

    return Promise.reject();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={tryLogin}>
      {({ isSubmitting }) => (
        <div>
          <Form className="Form flex-column">
            <span className="title pb-2">Admin Dashboard</span>

            {error ? (
              <Alert sx={{ height: '100%' }} className="mb-2" severity="error">
                {error}
              </Alert>
            ) : null}

            <Field type="text" name="username" placeholder="Enter your email or username" />
            <ErrorMessage name="username" component="div" />

            <Field type="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" />

            <button className="mt-2" disabled={isSubmitting} type="submit">
              {isSubmitting ? <CircularProgress /> : 'LOGIN'}
            </button>

            <span className="pt-2">
              No account? <Link to="/register">Register</Link>
            </span>
          </Form>
        </div>
      )}
    </Formik>
  );
}
