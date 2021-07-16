import React from "react"
import { Form, Formik } from "formik"
import { urls, useRouting } from "../routing"

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
      <p>This is login page!</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <Form className="Form">
            <label htmlFor="email">
              <p>Email:</p>
              <input type="text" name="email" onChange={handleChange} />
            </label>
            <label htmlFor="password">
              <p>Password:</p>
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <button type="submit">Go to dashboard</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
