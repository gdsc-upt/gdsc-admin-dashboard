import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  Box, Button,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "../../../components/snackbar";
import { Technology } from "../models/technology";
import { addTechnology } from "../technologies-api";
import PrimaryButton from "../../../components/buttons/primary-button";

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

const inputStyle = {
  marginTop: 1,
  marginBottom: 1,
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export default function AddTechnology({ onAdded }: AddTechnologyProps) {
  const [open, setOpen] = useState(false);
  const snackBar = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (technology: Technology) => {
    const response = await addTechnology(technology);
    if (response.status === 201) {
      onAdded();
      return handleClose();
    }
    console.log("error");
    snackBar.showError("Muie Dobre");
    return false;
  };

  return (
    <>
      <PrimaryButton text="Add" onClick={handleOpen} />

      <Modal
        disableAutoFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleChange }) => (
              <div>
                <Form className="Form">
                  <span className="text-center">Add technology</span>
                  <TextField
                    autoFocus
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    name="name"
                    inputProps={{ maxLength: 30 }}
                    onChange={handleChange}
                    sx={inputStyle}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name="description"
                    inputProps={{ maxLength: 256 }}
                    onChange={handleChange}
                    sx={inputStyle}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Icon"
                    name="icon"
                    variant="outlined"
                    inputProps={{ maxLength: 30 }}
                    onChange={handleChange}
                    sx={inputStyle}
                  />
                  <Button tabIndex={-1} type="submit" onClick={onAdded} disableRipple>
                    Add
                  </Button>
                </Form>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
