import React from "react";
import { Form, Formik } from "formik";
import { urls, useRouting } from "../routing";

const styles = {
  header: {
    paddingLeft: "3em",
    paddingRight: "3em",
  },
};

export type LoginForm = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { routeTo } = useRouting();

  const initialValues = {
    email: "admin",
    password: "admin",
  };

  const onSubmit = async (creds: LoginForm) => {
    // eslint-disable-next-line no-console
    console.log(creds);
    routeTo(urls.dashboard);
  };

  // Formik will be used for all types of forms

  return (
    <div className="Login">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <div style={styles.header}>
              <img
                src={require("../assets/images/gdsc-logo-and-text.png").default}
                alt="GDSC logo"
              />
            </div>
            <Form className="Form">
              <span className="title">Admin Dashboard</span>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <button type="submit">LOGIN</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
