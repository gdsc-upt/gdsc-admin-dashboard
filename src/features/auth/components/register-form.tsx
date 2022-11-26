import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AxiosError } from "axios";
import { Alert } from "@mui/material";
import { useRouting } from "../../../routing";
import { useAuth } from "../services/auth-context";
import { AUTH_URLS } from "../routes";
import { RegisterRequest } from "../models/register.request";

const initialValues: RegisterRequest = {
  username: "admin",
  email: "admin@example.com",
  password: "admin",
};

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>(undefined);
  const { routeTo } = useRouting();
  const auth = useAuth();

  const handleError = (apiError: AxiosError) => {
    if (apiError.response?.status === 401) {
      return setError("Invalid username or password");
    }

    return setError("Something went wrong :(");
  };

  const tryRegister = async (registerRequest: RegisterRequest) => {
    auth.signUp(registerRequest, () => routeTo(AUTH_URLS.login), handleError);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={tryRegister}>
      {({ isSubmitting }) => (
        <div>
          <Form className="Form">
            <span className="title">Admin Dashboard Register</span>

            {error ? (
              <Alert sx={{ height: "100%" }} className="mb-2" severity="error">
                {error}
              </Alert>
            ) : null}

            <Field type="text" name="username" placeholder="Enter your username" />

            <Field type="email" name="email" placeholder="Enter your email" />

            <Field type="password" name="password" placeholder="Enter your password" />

            <button disabled={isSubmitting} type="submit">
              Register
            </button>

            <span>
              Already have an account?
              {" "}
              <Link to="/login">Log in</Link>
            </span>
          </Form>
        </div>
      )}
    </Formik>
  );
}
