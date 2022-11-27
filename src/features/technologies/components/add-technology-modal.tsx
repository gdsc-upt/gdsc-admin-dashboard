import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "../../../components/snackbar";
import { Technology } from "../models/technology";
import { addTechnology } from "../technologies-api";
import PrimaryButton from "../../../components/buttons/primary-button";
import { StyledModal } from "../../../components/gdsc-modal";

const initialValues: Technology = {
  id: "",
  name: "",
  description: "",
  icon: "",
  created: "",
  updated: "",
};

interface AddTechnologyProps {
  readonly onAdded: () => void;
}

const inputStyle = {
  marginTop: 1,
  marginBottom: 1,
};

export default function AddTechnologyModal({ onAdded }: AddTechnologyProps) {
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

    snackBar.showError("Muie Dobre");
    return false;
  };

  return (
    <>
      <PrimaryButton text="Add" onClick={handleOpen} />

      <StyledModal open={open} onClose={handleClose}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange }) => (
            <Form>
              <Typography color="primary" variant="h5" className="text-center">
                Add technology
              </Typography>

              <TextField
                autoFocus
                fullWidth
                label="Title"
                variant="outlined"
                name="name"
                inputProps={{ maxLength: 30 }}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                inputProps={{ maxLength: 256 }}
                onChange={handleChange}
                sx={inputStyle}
              />

              <TextField
                fullWidth
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
          )}
        </Formik>
      </StyledModal>
    </>
  );
}
