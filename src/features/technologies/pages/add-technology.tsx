import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import {
  Alert, Box, Button, Snackbar,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
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

export function AddTechnology({ onAdded }: AddTechnologyProps) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleErrorOpen = () => setError("Muie Dobre");
  const handleErrorClose = () => setError(undefined);

  const onSubmit = async (technology: Technology) => {
    const response = await addTechnology(technology);
    if (response.status === 201) {
      onAdded();
      return handleClose();
    }
    handleErrorOpen();
    return false;
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (open && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <>
      <Button sx={{ marginTop: 3, fontSize: 16 }} disableRipple onClick={handleOpen}>
        Add Technology
      </Button>
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
                    inputRef={inputRef}
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
                  <Button type="submit" onClick={onAdded} disableRipple>
                    Add
                  </Button>
                </Form>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!error?.length}
        autoHideDuration={2500}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: "1000" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
