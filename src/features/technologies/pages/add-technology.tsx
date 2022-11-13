import { Form, Formik } from "formik";
import React from "react";
import { Technology } from "../models/technology";
import { useRouting } from "../../../routing";
import { TECHNOLOGIES_URLS } from "../urls";
import { addTechnology } from "../technologies-api";

const initialValues: Technology = {
  id: "",
  name: "",
  description: "",
  icon: "",
  created: "",
  updated: "",
};

export function AddTechnology() {
  const { routeTo } = useRouting();

  const onSubmit = async (technology: Technology) => {
    await addTechnology(technology);
    routeTo(TECHNOLOGIES_URLS.technologies);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <Form className="Form">
              <span className="title">Add technology</span>
              <input
                type="text"
                maxLength={25}
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
              />

              <input
                type="string"
                maxLength={256}
                name="description"
                placeholder="Enter description"
                onChange={handleChange}
              />
              <input type="string" name="icon" placeholder="Enter icon" onChange={handleChange} />
              <button type="submit">Add</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
