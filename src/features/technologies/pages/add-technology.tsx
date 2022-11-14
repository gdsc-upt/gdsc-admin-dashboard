import { Form, Formik } from "formik";
import React from "react";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Technology } from "../models/technology";
import { addTechnology } from "../technologies-api";

const initialValues: Technology = {
  id: "",
  name: "",
  description: "",
  icon: "",
  created: "",
  updated: "",
};

interface AddTechnologyProps {
  onAdded: () => void;
}

export function AddTechnology({ onAdded }: AddTechnologyProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (technology: Technology) => {
    await addTechnology(technology);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Add Technology</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
                <input
                  type="string"
                  name="icon"
                  placeholder="Enter icon"
                  onSubmit={() => handleChange}
                />
                <Button type="submit" onClick={onAdded}>
                  Add
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </Modal>
    </>
  );
}
