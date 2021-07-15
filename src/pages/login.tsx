import React from "react"
import { Form, Formik, useFormik } from "formik"
import { urls, useRouting } from "../routing"
import logo from "../images/gdsc-logo-and-text.png"

export type LoginForm = {
  email: string
  password: string
}

export function LoginPage() {
  const { routeTo } = useRouting()

  const initialValues = {
    email: "admin",
    password: "scoala1deHackeri",
  }

  const onSubmit = async (creds: LoginForm) => {
    console.log(creds)
    routeTo(urls.dashboard)
  }

  // Formik will be used for all types of forms

  return (
    <div className="Login">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <div className="header">
              <img src={logo} alt="GDSC logo" />
            </div>
            <Form className="Form">
              <span>Admin Dashboard</span>
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
  )
}
