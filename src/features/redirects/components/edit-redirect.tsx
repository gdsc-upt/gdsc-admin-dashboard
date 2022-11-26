import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import {
  Alert, Box, Button, Snackbar,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Redirect } from "../models/redirect";
import { patchRedirect } from "../redirects-api";

interface EditRedirectProps {
  onEdited: () => void;
  initialRedirect: Redirect;
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

export function EditRedirect({ onEdited, initialRedirect }: EditRedirectProps) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleErrorOpen = () => setError("Muie Dobre");
  const handleErrorClose = () => setError(undefined);

  const submitHandler = async (redirect: Redirect) => {
    const response = await patchRedirect(initialRedirect.path, redirect);
    if (response !== undefined) {
      onEdited();
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
      <IconButton aria-label="edit" size="large" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Formik initialValues={initialRedirect} onSubmit={submitHandler}>
            {({ handleChange }) => (
              <div>
                <Form className="Form">
                  <span className="text-center">Add redirect</span>
                  <TextField
                    disabled
                    defaultValue={initialRedirect.path}
                    id="outlined-basic"
                    label="Path"
                    variant="outlined"
                    name="path"
                    inputProps={{ maxLength: 50 }}
                    onChange={handleChange}
                    sx={inputStyle}
                  />
                  <TextField
                    inputRef={inputRef}
                    defaultValue={initialRedirect.redirectTo}
                    id="outlined-basic"
                    label="Redirect To"
                    variant="outlined"
                    name="redirectTo"
                    inputProps={{ maxLength: 256 }}
                    onChange={handleChange}
                    sx={inputStyle}
                  />
                  <Button type="submit" onClick={onEdited} disableRipple>
                    Edit
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
